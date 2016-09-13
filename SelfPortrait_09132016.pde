size(1000, 740);
background(0, 0, 0);
stroke(255, 255, 255);
strokeWeight(2);
noFill();
scale(0.37);



//EYE

beginShape();  //small eyelash
vertex(1110, 550);
vertex(1100, 560);
vertex(1070, 565);
vertex(1045, 555);
vertex(1070, 570);
vertex(1110, 570);
endShape();

beginShape();  //upper eyelash
vertex(1275, 590);
vertex(1235, 555);
vertex(1175, 555);
vertex(1145, 515);
vertex(1175, 525);
vertex(1225, 530);
endShape(CLOSE);

triangle(1195, 590, 1180, 610, 1205, 590);  //lower eyelashes
triangle(1205, 590, 1255, 600, 1275, 590);

rect(1195, 555, 10, 35); //iris

beginShape();  //fold-y bit
vertex(1200, 485);
vertex(1200, 520);
vertex(1195, 520);
vertex(1240, 520);
vertex(1260, 545);
endShape();

//eyeball
beginShape();
vertex(1195, 555);
vertex(1195, 590);
vertex(1275, 590);
vertex(1235, 555);
endShape(CLOSE);



//EYEBROW

beginShape();
vertex(1160, 470);
vertex(1135, 440);
vertex(1165, 420);
vertex(1255, 415);
vertex(1330, 485);
vertex(1250, 460);
endShape(CLOSE);

triangle(1095, 445, 1110, 505, 1085, 455);  //small eyebrow


//NOSE

beginShape();   //nostril
vertex(1045, 780);
vertex(1035, 790);
vertex(1050, 800);
vertex(1065, 800);
vertex(1085, 805);
endShape(CLOSE);

beginShape();  //nose side
vertex(1095, 825);
vertex(1110, 825); 
vertex(1115, 820);
vertex(1155, 780);
vertex(1160, 765);
vertex(1150, 740);
endShape();



//MOUTH

beginShape();  //upper lip
vertex(1165, 945);
vertex(1130, 935);
vertex(1110, 925);
vertex(1070, 890);
vertex(1055, 885);
vertex(1020, 880);
vertex(1045, 915);
vertex(1130, 940);
endShape(CLOSE);

beginShape(); //lower lip
vertex(1080, 1030);
vertex(1060, 1010);
vertex(1045, 985);
vertex(1060, 960);
vertex(1095, 950);
vertex(1165, 945);
vertex(1070, 955);
endShape();

line(1075, 925, 1075, 955);  //teeth



//PROFILE

beginShape(); //forehead to upper lip
vertex(1260, 205);
vertex(1215, 250);
vertex(1135, 355);
vertex(1095, 445);
vertex(1110, 485);
vertex(1115, 550);
vertex(1115, 565);
vertex(1070, 610);
vertex(1060, 625);
vertex(1050, 645);
vertex(1020, 685);
vertex(995, 705);
vertex(980, 715);
vertex(970, 735);
vertex(975, 760);
vertex(990, 780);
vertex(1005, 790);
vertex(1035, 810);
vertex(1040, 825);
vertex(1040, 835);
vertex(1020, 880);
endShape();

beginShape();  //lower lip to neck
vertex(1080, 1030); 
vertex(1095, 1025);
vertex(1130, 1065);
vertex(1120, 1100);
vertex(1160, 1170);
vertex(1175, 1185);
vertex(1200, 1190);
vertex(1365, 1175);
vertex(1380, 1185);
vertex(1500, 1380);
vertex(1650, 1650);
vertex(1665, 1720);
vertex(1650, 1765);
vertex(1635, 1785);
vertex(1610, 1795);
endShape(); 

beginShape();  //hairline and back of neck
vertex(1260, 205);
vertex(1380, 165);
vertex(1405, 165);
vertex(1450, 220);
vertex(1450, 240);
vertex(1425, 265);
vertex(1415, 300);
vertex(1605, 500);
vertex(1600, 675);
vertex(1700, 680);
vertex(1830, 645);
vertex(1960, 780);
vertex(1950, 850);
vertex(1875, 1040);
vertex(2025, 1305);
vertex(2185, 1590);
vertex(2235, 1675);
vertex(2270, 1750);
vertex(2320, 1960);
vertex(2320, 1980);
vertex(2315, 2015);
endShape();



///EAR

beginShape();  //outside
vertex(1690, 895);
vertex(1690, 885);
vertex(1740, 870);
vertex(1765, 860);
vertex(1805, 840);
vertex(1845, 780);
vertex(1865, 700);
vertex(1860, 670);
vertex(1830, 645);
endShape();

beginShape();  //middle
vertex(1770, 825);
vertex(1785, 800);
vertex(1815, 770);
vertex(1835, 680);
vertex(1820, 650);
endShape();

beginShape();  //inside
vertex(1750, 730);
vertex(1735, 735);
vertex(1740, 780);
vertex(1730, 795);
vertex(1740, 805);
vertex(1750, 805);
vertex(1765, 795);
vertex(1780, 770);
vertex(1800, 755);
vertex(1800, 690);
vertex(1785, 660);
endShape();



//NON-FACE PARTS

beginShape(); //front facing shoulder
vertex(1790, 1930);
vertex(1790, 1945);
vertex(1785, 2015);
endShape();

beginShape();  //back facing shoulder
vertex(1620, 1595);
vertex(1590, 1615);
vertex(1575, 1625);
vertex(1545, 1675);
vertex(1445, 1930);
vertex(1420, 2015);
endShape();



//SHADING

stroke(135, 107, 131);

beginShape();  //nose bridge shading
vertex(1070, 650);
vertex(1120, 560);
vertex(1145, 475);
vertex(1225, 460);
vertex(1225, 530);
endShape(CLOSE);

triangle(1195, 590, 1210, 645, 1285, 590);  //eye shading

beginShape();  //nose shading
vertex(975, 735);
vertex(995, 745);
vertex(1010, 745);
vertex(1105, 800);
vertex(1110, 740);
vertex(1150, 740);
vertex(1155, 800);
vertex(1090, 860);
vertex(1035, 895);
endShape();
 
beginShape();  //lowerlip
vertex(1165, 945);
vertex(1170, 955);
vertex(1095, 1015);
vertex(1075, 1025);
endShape();

beginShape();  //chin
vertex(1095, 1025);
vertex(1105, 1020);
vertex(1155, 1060);
vertex(1155, 1075);
vertex(1120, 1100);
endShape();

beginShape();  //jaw
vertex(1285, 1180);
vertex(1385, 1150);
vertex(1495, 1105);
vertex(1520, 1095);
vertex(1560, 1040);
vertex(1580, 1005);
vertex(1685, 1055);
vertex(1685, 1320);
vertex(1480, 1315);
vertex(1370, 1170);
endShape(CLOSE);

beginShape();  //'cheekbone'
vertex(1170, 1180);
vertex(1170, 795);
vertex(1365, 635);
vertex(1330, 485);
vertex(1310, 430);
vertex(1415, 300);
endShape();

beginShape();  //back of neck
vertex(1830, 645);
vertex(1865, 700);
vertex(1810, 980);
vertex(1875, 1040);
vertex(1950, 850);
vertex(1960, 780);
endShape(CLOSE);

beginShape(); //ear shading
vertex(1750, 730);
vertex(1735, 735);
vertex(1740, 780);
vertex(1730, 795);
vertex(1740, 805);
vertex(1750, 805);
vertex(1765, 795);
endShape(CLOSE);

triangle(1805, 840, 1690, 885, 1695, 905);



//HAIR

stroke(255, 255, 255);

beginShape();  //main bun
vertex(1875, 1040);
vertex(2090, 1175);
vertex(2190, 1160);
vertex(2215, 1150);
vertex(2285, 1080);
vertex(2360, 815);
vertex(2195, 560);
vertex(2186, 515);
vertex(2210, 485);
vertex(2105, 315);
vertex(1910, 60);
vertex(1790, 35);
vertex(1505, 55);
vertex(1335, 120);
vertex(1255, 205);
endShape();


//hair bun
stroke(135, 107, 131);  //top
triangle(2105, 320, 2250, 145, 2475, 260);
triangle(2105, 320, 1835, 330, 2065, 355);
triangle(2105, 320, 2380, 150, 2615, 395);
triangle(2104, 320, 2275, 460, 2310, 650);

triangle(1875, 1040, 2100, 1220, 2155, 1290);  //bottom
triangle(1875, 1040, 2050, 1040, 2080, 1080);