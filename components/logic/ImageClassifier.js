import { MobileModel, torch, torchvision, media} from 'react-native-pytorch-core';

import * as ImageNetClasses from "../../assets/classifier-model/ClassNames.json";

const T = torchvision.transforms;

// the url of the model. NOTE: learn to use a local model
//const MODEL_URL = 'https://github.com/facebookresearch/playtorch/releases/download/v0.1.0/mobilenet_v3_small.ptl';
const MODEL_PATH = require('../../assets/classifier-model/mobilenet_v3_soma.ptl');

// variable to hold a reference to the leaded ML model
let model = null;

export default async function classifyImage(image){
    const width = image.getWidth();
    const height = image.getHeight();

    const blob = media.toBlob(image);

    let tensor = torch.fromBlob(blob, [height, width, 3]);

    // rearrange the tensor shape to be [CHW]
    tensor = tensor.permute([2, 0, 1]);

    // divide the tensor by 255 to get values between [0,1]
    tensor = tensor.div(255);

    // crop the image in the center to be a square image
    const centerCrop = T.centerCrop(Math.min(width, height));
    tensor = centerCrop(tensor);

    // resize image tensor to 3 x 255 x 255
    const resize = T.resize(255);
    tensor = resize(tensor);

    // normalize the image tensor with mean and standard deviation
    const normalize = T.normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225]);
    tensor = normalize(tensor);

    // unsqueeze adds 1 leading dimension to the tensor
    tensor = tensor.unsqueeze(0);

    if (model == null){
        //const filePath = await MobileModel.download(MODEL_URL);
        filePath = await MobileModel.download(MODEL_PATH);
        model = await torch.jit._loadForMobile(filePath);
    }

    // run the ML inference with the pre-processed image tensor
    const output = await model.forward(tensor);

    // get the index of the value with the highest probability
    const maxIdx = output.argmax().item();
    const confidence = output.argmax().item();

    const PredictedClass = ImageNetClasses[maxIdx]

    return PredictedClass
}