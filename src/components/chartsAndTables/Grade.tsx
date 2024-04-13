interface GradeProps {
  grade: string;
}

function Grade({ grade }: GradeProps) {
  let colorString = "blue";

  switch (grade) {
    case "A": {
      colorString = "#00ff00";
      break;
    }
    case "B": {
      colorString = "#17b817";
      break;
    }
    case "C": {
      colorString = "#95cf21";
      break;
    }
    case "D": {
      colorString = "#ded63e";
      break;
    }
    case "E": {
      colorString = "#deb13e";
      break;
    }
    case "F": {
      colorString = "#de813e";
      break;
    }
    case "G": {
      colorString = "#de503e";
      break;
    }
  }
  const colorStyle = { background: colorString };
  return (
    <div className="hiiliGradeContainer">
      <div className="hiiliBox hiiliGradeBox"></div>
      <div className="hiiliColorGrade" style={colorStyle}>
        {grade}
      </div>
    </div>
  );
}

export default Grade;
