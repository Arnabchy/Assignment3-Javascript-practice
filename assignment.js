//feetToMile
            function feetToMile(feet){
                var mile = feet/5280;
                return mile;
            }
            var asifMile = feetToMile ( 56790 );
            console.log ( asifMile , "Mile");
           

//woodCalculator

        function woodCalculator (chair, table, khat){
            var chairCount= chair* 1;
            var tableCount= table* 3;
            var khatCount = khat* 5;
            var totalWood= chairCount + tableCount + khatCount;
            return totalWood;
        }
        var woodResult = woodCalculator( 5, 2, 5);
        console.log( woodResult, "cubic wood");


//brickCalculator

        //input data
        var floorHeightLessTwenty=true;
        var floorNumber=12;

        //calculation
        if (floorHeightLessTwenty==true && floorNumber <=10){
            var floorHeightFeet = 15;
            var brickNeedFirstTenFloor= 1000;
            var totalResultFirstTen= floorHeightFeet*floorNumber*brickNeedFirstTenFloor;
            console.log(totalResultFirstTen)
        }
        else if (floorHeightLessTwenty==true && floorNumber>10 ){
            var tenPlusFloorHeight=12;
            var brickNeedTillTwentyFloor= 1000;
            var floorNumber2=floorNumber-10;
            var result2= floorNumber2*tenPlusFloorHeight*brickNeedTillTwentyFloor;
            var totalResult2= 150000 + result2;
            console.log(totalResult2);
        }
        else {
            var twentyPlusFloor=10;
            var brickNeedTwentyPlusFloor= 1000;
            var floorNumber3=floorNumber-20;
            var result3= floorNumber3*twentyPlusFloor*brickNeedTwentyPlusFloor;
            var totalResult3= 270000 + result3;
            console.log(totalResult3);
        }

//tinyFriend
        function tinyFriend(names){
            var smallest = names [0];
            for (var i=0; i < names.length; i++){
                var currentNames = names[i];
                if (currentNames.length< smallest.length){
                    smallest = currentNames;
                }
            }
            return smallest;
        }
        var friendName = tinyFriend(["Akhamoldesta","ColkaColi","Minhaz",
        "Farikullah","Mirindawala","Biklis","pepsi", "deksas","raijon","iliyas","roy","ensarasad"]);
        console.log(friendName);
