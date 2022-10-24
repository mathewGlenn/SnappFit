const WhatIsCalorie = {
  title: 'What is a Calorie?',
  content: `Definition:
A calorie is a unit of measurement — but it doesn't measure weight or length. A calorie is a unit of energy. When you hear something contains 100 calories, it's a way of describing how much energy your body could get from eating or drinking it.
  
Importance:
Your body uses calories from the food you eat for energy. Calories are a measure of energy and are commonly used to describe the energy content of foods. Your body is able to break down food molecules and use the stored energy for many different functions, including movement, thought and growth.
  
Examples:
White rice: 1 cup or 158g of rice’s has 206 calories.
Meat: 100g of meat has 143 calories .
Peanuts: 146 grams of peanuts has a calorie of 826.
  `,
};

const WhatIsFats = {
  title: 'What is a Fat?',
  content: `Definition:
Fats in food come in several forms, including saturated (Ex. Cheese, Animal fat, milk) monounsaturated (Ex. Olive Oil, Avocado, Peanuts), and polyunsaturated omega 3 fatty acids (Fish, seafoods, Flaxseeds). Too much fat or too much of the wrong type of fat can be unhealthy. Some examples of foods that contain fats are butter, oil, nuts, meat, fish, and some dairy products.
  
Importance:
A small amount of fat is an essential part of a healthy, balanced diet. Fat is a source of essential fatty acids, which the body cannot make itself. Fat helps the body absorb vitamin A, vitamin D and vitamin E. These vitamins are fat-soluble, which means they can only be absorbed with the help of fats.
  
Example:
HDL (high-density lipoprotein), or “good” cholesterol, absorbs cholesterol and carries it back to the liver. The liver then flushes it from the body. High levels of HDL cholesterol can lower your risk for heart disease and stroke. (Ex. Is the omega 3 fatty acids, peanuts or oil coming from plants)
  
LDL (low-density lipoprotein), sometimes called “bad” cholesterol, makes up most of your body's cholesterol. High levels of LDL cholesterol raise your risk for heart disease and stroke. (Ex. Meat fats, Chicken skin, Margarine)`,
};

const WhatIsProtein = {
  title: 'What is a Protein?',
  content: `Definition: 
Proteins are large, complex molecules that play many critical roles in the body. They do most of the work in cells and are required for the structure, function, and regulation of the body’s tissues and organs. Proteins are made up of hundreds or thousands of smaller units called amino acids, which are attached to one another in long chains. There are 20 different types of amino acids that can be combined to make a protein. The sequence of amino acids determines each protein’s unique 3-dimensional structure and its specific function. Amino acids are coded by combinations of three DNA building blocks (nucleotides), determined by the sequence of genes.
  
Importance: 
Proteins are the fundamental building blocks of life. Protein is found in every cell of the human body. Protein's basic structure is an amino acid chain. Protein is required in your diet to help your body repair and create new cells.
  
Examples: 
Eggs: One large egg (50 grams) provides 6.3 grams of protein.
Chicken Breast: One half of a chicken breast (86 grams) provides 26.7 grams of protein.
Milk: One cup (246 mL) of dairy milk provides 8.32 grams of protein.
Yogurt: One 7-ounce (200-gram) container provides 19.9 grams.
Fish: All types of fish are high in protein. For example, half a salmon fillet (124 grams) provides 30.5 grams of protein, while a cod fillet (180 grams) provides 41 grams of protein.
Peanut: A 1-ounce (28.35-gram) serving of peanuts provides 7.31 grams of protein.`,
};

const WhatIsCarbohydrate = {
  title: 'What is a Carbohydrate?',
  content: `Definition:
Carbohydrates are sugar molecules. Along with proteins and fats, carbohydrates are one of three main nutrients found in foods and drinks. Your body converts carbohydrates into glucose. Glucose, also known as blood sugar, is the primary source of energy for your body's cells, tissues, and organs.
  
Importance:
Carbohydrates are the primary source of energy in your body, they help fuel your brain, kidneys, heart muscles, and central nervous system. For instance, fiber is a carbohydrate that aids in digestion, helps you feel full, and keeps blood cholesterol levels in check.
  
Example:
•Bread, rice, pasta, oats, quinoa, couscous.
•Starchy vegetables (potatoes, corn and pumpkin)
•Beans and pulses (chickpeas, baked beans, lentils)
•Some dairy foods such as milk and yoghurt.
•Fruit.
•Sugar and honey.`,
};

const SuggestedGoal = {
  maintain: 'Your BMI is normal. You should maintain your weight.',
  gain: 'Your BMI is below normal. It is advised you gain weight.',
  lose: 'Your BMI is above normal. It is advised you lose some weight.',
};

const Excercises = {
  flexibility: {
    indoor: {
      beginner: {
        title: 'Cobra Pose',
        description: `Start from a prone position.
With palms flat and positioned beneath your shoulder blades, lift your upper body and head off the floor.
Pushing from your hands, bring your head and upper body as high as they’ll go. Engage your lower back muscles and lift that chin to raise as much as possible.
Hold for a few breaths.
Slowly lower on an exhale.`,
      },
      intermediate: {
        title: 'Sphinx stretches',
        description: `Start in a prone position, stomach to the ground.
Position your elbows beneath your shoulder blades.
Engage your quads and knees to drive the tops of your feet into the floor.
Lift your upper body by pressing your palms into the ground.
Allow your spine to bend and push your chest outward. Look up to create distance between your chin and collarbone to help drive the movement.
Hold for 5–10 breaths then relax.
Repeat as many times as needed.`,
      },
      advance: {
        title: 'Back Flexion stretch',
        description: `SStart in a standing position with your arms down by the sides of your body.
Bend forward and hinge at the hips.
Keep going until you can either touch your toesor grasp your ankles.
Hold for 5–10 seconds. You should feel a bit of pull in your hamstrings.
Return to stand.`,
      },
    },
    outdoor:{
      beginner: {
        title: 'Overhead triceps stretch',
        description: `Stand tall with your spine aligned.
Bring your right arm up toward the ceiling.
Bend your right arm at the elbow, reaching down toward your upper back. Leading with your middle finger, get your right hand as close to your spine as you can.
Lift your left arm overhead, grab the right elbow and pull the arm until you feel the right triceps stretch.
Hold for 30 seconds.
Repeat 3–4 times per arm.`,
      },
      intermediate: {
        title: 'Standing quad stretch',
        description: `Stand tall with your spine aligned.
Raise your right heel toward your butt.
Stand up straight and try to point your right knee directly down toward the ground, keeping your knees as aligned as possible.
Hold your right foot with your right hand and hold for 30 seconds.
Return to standing.
Repeat 2–3 times on each leg.`,
      },
      advance: {
        title: 'Naked Windmill',
        description: `The ability to spiral your body while staying balanced on your feet is a movement old-time strongman did for health, strength, and mobility benefits.
Stand with your feet close together in a slightly staggered stance, your right foot about six inches ahead of your left. Keep your knees slightly bent as you push the hips back and lower your torso, shifting your weight to the back leg to feel the stretch in your hamstrings. From that position, twist your torso to the left while reaching your right hand down to the inside of your right foot. Push your hips back into your left glute and reach your left hand as high as you can. You should feel the stretch in your hamstrings, glutes, chest, shoulders, and sides. Hold for five breaths and switch sides. Complete three reps on each side to help you get deeper into the stretch. On the third rep, hold the deepest part of the stretch for ten deep breaths.`,
      },
    },
  },

  resistance:{
    indoor: {
      beginner: {
        title: 'Resistance band pull apart',
        description: `Stand with your arms extended out in front of you at chest height.
Hold a resistance band tautly with both hands. The band should be parallel to the ground.
Keeping your arms straight, pull the band toward your chest by moving your arms outward to your sides. Initiate this movement from your mid-back.
Squeeze your shoulder blades together, and keep your spine straight, then slowly return to the starting position.
Do 1–3 sets of 15–20 reps.`,
      },
      intermediate: {
        title: 'Push Up',
        description: `Start in a plank position with your palms directly under your shoulders.
Keeping your back flat and bracing your core, lower your body by bending your elbows until your chest almost touches the floor.
Immediately push your body back up to the starting position.
Repeat 8–12 times. Start with 1–2 sets, and build up to 3 sets as you get stronger.`,
      },
      advance: {
        title: 'Squat to overhead raise',
        description: `This exercise not only works your glutes and leg muscles, it also works the muscles in your core, back, and shoulders, as well as your triceps.
Stand with your feet slightly wider than your hips and your arms alongside your body.
Slowly lower your hips down into a squat position.
Press up to come back into standing and raise your arms overhead.
Return to the starting position.
Do 1–3 sets of 8–12 repetitions.`,
      },
    },
    outdoor:{
      beginner: {
        title: 'Squat to overhead press using resistance band',
        description: `Stand on the resistance band with your feet shoulder-width apart. Position your hands at shoulder level with your palms facing up, holding the resistance band. Drop into a squat, then push back up and fully extend your arms so you raise the resistance band overheard. Then lower slowly into another squat.`,
      },
      intermediate: {
        title: 'Front squat using resistance band',
        description: `Stand on the resistance band with your feet slightly wider than shoulder-width apart, and bring the top of the band up to rest on the front of your shoulders. Lower into a squat, with your chest up and your knees over your toes. Then push up to the starting position.`,
      },
      advance: {
        title: 'Deadlift',
        description: `Deadlifting can increase core strength, core stability and improve your posture. Deadlifting trains most of the muscles in the legs, lower back and core. These are all muscles responsible for posture, which will help keep your shoulders, spine, and hips in alignment.`,
      },
    },
  },


  cardio:{
    indoor: {
      beginner: {
        title: 'Jumping jacks',
        description: `Running has its own benefits but the classic jumping jack is a more convenient exercise that you can do anywhere! Jumping jacks can increase blood flow, improve flexibility and help you build good endurance. These factors can actually enhance the productivity of your workout.`,
      },
      intermediate: {
        title: 'Burpee',
        description: `Burpee is a full-body intense workout that helps to improve body strength. The advantage of doing burpees is that all major muscle groups such as the core, chest, arms, back, glutes and legs feel the effect. One single burpee is a pack of multiple exercises because it includes hops, squats, and then push-ups. It burns more calories than running and gives you an overall muscular workout.`,
      },
      advance: {
        title: 'Kettlebell swings',
        description: `The kettlebell swing is a very efficient exercise. It involves quick movements and multiple variations. It has been shown to increase aerobic capacity, increase core strength, work the glutes, improve balance and coordination in the body. Do pay attention to the amount of weight you use.`,
      },
    },
    outdoor:{
      beginner: {
        title: 'Running Stairs',
        description: `Climbing stairs is one of the best exercises when it comes to pure FAT BURN, strengthening the lower body, toning the butt, thighs, calves, losing inches from those love handles and belly and building great abs. Along with these benefits is the immense good it does for your lungs and cardio vascular system.`,
      },
      intermediate: {
        title: 'Swimming',
        description: `keeps your heart rate up but takes some of the impact stress off your body. 
builds endurance, muscle strength and cardiovascular fitness.
helps you maintain a healthy weight, healthy heart and lungs.
tones muscle and builds strength.`,
      },
      advance: {
        title: 'Riding Bike or Biking',
        description: `Biking is a top-notch cardio workout. You'll burn about 400 calories an hour. Plus, it strengthens your lower body, including your legs, hips, and glutes.`,
      },
    },
  },
};

const AboutTextContent = `
SnappFit is a fitness app that can be used by everyone who want to live a healthy life style. The app uses artificial intelligence to identify the user’s somatype. The app also containes useful knowledge for understanding key concepts in health management. There are also useful tools such as BMI calculator.

This app serves as a Capstone project of Christian Jade Lejano, Jessica Marie Rosario, and Sannimar Ianne Gammad.

Isabela State University - Cauayan City
S.Y. 2022-2023

version 1.0

`;

export {WhatIsCalorie, WhatIsProtein, WhatIsCarbohydrate, WhatIsFats, SuggestedGoal, Excercises, AboutTextContent};
