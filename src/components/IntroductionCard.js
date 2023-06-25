function IntroductionCard(props) {
  const name = props.name;
  const school = props.school;
  const age = props.age;
  const hobbyList = props.hobbyList;
  const gradeAverage = props.gradeAverage;
  const isGraduated = props.isGraduated;
  const isEmployed = props.isEmployed;

  let content = (
    <div className="introduction">
      <p className="introduction__text">
        Hello, my name is {name}. I am a student at {school}, and I would like
        to be the best React developer in the world :). I'm {age} years old, and
        my hobbies are {hobbyList.join(", ")}. My GPA is {gradeAverage} and i am
        going to graduate in {isGraduated}. Currently i am {isEmployed}.
      </p>
    </div>
  );

  return content;
}

export default IntroductionCard;
