import React from 'react';
import './App.css';
import Header from './components/Header';
import IntroductionCard from './components/IntroductionCard';
import Footer from './components/Footer';

function App() {
  const logoName = "Introduction to React";

  const friendName = "Mike";
  const friendSchool = "Budapesti Műszaki és Gazdaságtudományi Egyetem";
  const friendAge = "25";
  const friendHobbyList = ["Reading", "Gaming"];
  const friendGradeAverage = "3.5";
  const friendIsGraduated = "2022";
  const friendIsEmployed = "Employed";

  const yourName = "Trencsényi Balázs";
  const yourSchool = "CodeCool";
  const yourAge = "24";
  const yourHobbyList = ["Programming", "Gaming"];
  const yourGradeAverage = "4.0";
  const yourIsGraduated = "2023";
  const yourIsEmployed = "Unemployed";

  return (
    <div className="App">
      <Header logo={logoName} />
      <IntroductionCard
        name={friendName}
        school={friendSchool}
        age={friendAge}
        hobbyList={friendHobbyList}
        gradeAverage={friendGradeAverage}
        isGraduated={friendIsGraduated}
        isEmployed={friendIsEmployed}
      />
      <IntroductionCard
        name={yourName}
        school={yourSchool}
        age={yourAge}
        hobbyList={yourHobbyList}
        gradeAverage={yourGradeAverage}
        isGraduated={yourIsGraduated}
        isEmployed={yourIsEmployed}
      />
      <Footer />
    </div>
  );
}

export default App;
