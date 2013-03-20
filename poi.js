//--------------------------------------------------------------------
//Program: WheeAdventures - POI.js 
//Author: Mitch Odom 
//Date: 3/6/2013
//Description: Javascript file for the POI.htm page
//--------------------------------------------------------------------

$(document).bind("mobileinit", function () {
    $.mobile.ajaxEnabled = false;
    $.mobile.pushStateEnabled = false;
});

//Variables Page level in Scope
var poiID;
var categoryID;
var categoryTitle;
var lat_POI;
var long_POI;


//--------------------------------------------------------------------
// Name:  Document Ready Function
//--------------------------------------------------------------------
$(document).ready(function () {

    //Get incoming querystring values
    poiID = unescape(getQuerystring('qryPOI'));
    categoryID = unescape(getQuerystring('qryCatCode'));
    categoryTitle = unescape(getQuerystring('qryCatTitle'));
    lat_POI = unescape(getQuerystring('qryLat_POI'));
    long_POI = unescape(getQuerystring('qryLong_POI'));

    //set up top left information window for specific category
    //hide all information
    $('#hiking').hide();
    $('#mountainbiking').hide();
    $('#snowsports').hide();
    $('#waterfalls').hide();
    $('#whitewaterpaddling').hide();


    if (categoryTitle == "Hiking") {
        $('#hiking').show();
    }
    if (categoryTitle == "Mountain Biking") {
        $('#mountainbiking').show();
    }
    if (categoryTitle == "Snow Sports") {
        $('#snowsports').show();
    }
    if (categoryTitle == "Waterfalls") {
        $('#waterfalls').show();
    }
    if (categoryTitle == "Whitewater Paddling") {
        $('#whitewaterpaddling').show();
    }



    var categoryFileName = "Category_" + categoryID + ".js";
    var pathToCategoryDataFile = categoryFileName;

    //Get data from JSON object in Data_Categories file
    $.ajax({
        type: "GET",
        url: pathToCategoryDataFile,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: success_GetAllLocations_CallbackFunction,
        error: error_GetAllLocations_CallbackFunction
    });

    //$('a[id|=icon-back]').attr('href', 'poiList.html?qryCatCode=' + categoryID + '&qryCatTitle=' + categoryTitle);
});


//--------------------------------------------------------------------
// Ajax Callback Functions
//--------------------------------------------------------------------

//----------------------------------------------------------------
// Name:  success_GetAllLocations_CallbackFunction
// Description: Function that runs after the retrieval of the JSON
// object via the Ajax request
//---------------------------------------------------------------- 
function success_GetAllLocations_CallbackFunction(parRetrievedData) {

    console.log("Inside success_GetAllLocations()");

    //Retrieve the incoming POI ID from the querystring
    var poiID = getQuerystring('qryPOI');
   console.log("poiID = " + poiID);
    
    //Loop through the retrieved array of POI objects to get chosen POI info
    for (arrayIndex = 0; arrayIndex < parRetrievedData.length; arrayIndex++) {
    
    var currentPOIID = parRetrievedData[arrayIndex].POI_ID;
   // console.log("currentPOIID = " + currentPOIID);
    
    //Get info from desired POI
    if (currentPOIID == poiID) {
        // console.log("chosen POI = " + currentPOIID);

            var lat = parRetrievedData[arrayIndex].POI_Latitude;
            var long = parRetrievedData[arrayIndex].POI_Longitude;
            var title = parRetrievedData[arrayIndex].POI_Title;
            var desc = parRetrievedData[arrayIndex].POI_Description;
            var image1 = parRetrievedData[arrayIndex].POI_Image1;
            var image2 = parRetrievedData[arrayIndex].POI_Image2;
            var image3 = parRetrievedData[arrayIndex].POI_Image3;
//            var address1 = parRetrievedData[arrayIndex].POI_Address1;
//            var address2 = parRetrievedData[arrayIndex].POI_Address2;
//            var city = parRetrievedData[arrayIndex].POI_City;
//            var state = parRetrievedData[arrayIndex].POI_State;
//            var zip = parRetrievedData[arrayIndex].POI_ZipCode;
            var phone = parRetrievedData[arrayIndex].POI_Phone;
            var url = parRetrievedData[arrayIndex].POI_URL;
            var cat = parRetrievedData[arrayIndex].POI_Category;
//            var petFriendly = parRetrievedData[arrayIndex].POI_PetFriendly;
//            var imageDesc1 = parRetrievedData[arrayIndex].POI_Image1_Desc;
//            var imageDesc2 = parRetrievedData[arrayIndex].POI_Image2_Desc;
            //            var imageDesc3 = parRetrievedData[arrayIndex].POI_Image3_Desc;
            var difficulty = parRetrievedData[arrayIndex].POI_Difficulty;
            var trailTime = parRetrievedData[arrayIndex].POI_TrailTime;
            var trailTime2 = parRetrievedData[arrayIndex].POI_TrailTime2;
            var travelTime = parRetrievedData[arrayIndex].POI_TravelTime;
            var elevation = parRetrievedData[arrayIndex].POI_Elevation;
            var verticalDrop = parRetrievedData[arrayIndex].POI_VerticalDrop;
            var season = parRetrievedData[arrayIndex].POI_Season;
            var highlights = parRetrievedData[arrayIndex].POI_Highlights;
            var accessRating = parRetrievedData[arrayIndex].POI_AccessRating;
            var riverClass = parRetrievedData[arrayIndex].POI_Class;
            var length = parRetrievedData[arrayIndex].POI_Length;
            var level = parRetrievedData[arrayIndex].POI_Level;
            var putIn = parRetrievedData[arrayIndex].POI_Put_In;
            var takeOut= parRetrievedData[arrayIndex].POI_Take_Out;
            break;
        }
    }
    var categoryTitle = unescape(getQuerystring('qryCatTitle'));
    var categoryID = unescape(getQuerystring('qryCatCode'));
   
        console.log("Inside = " + url);
        console.log("CategoryID = " + categoryID);
        console.log("CategoryTitle = " + categoryTitle);
        console.log("Desc = " + desc);
        console.log("verticalDrop =" + verticalDrop);

        //Add link to buttons on POI.htm
        var buttonQuerystring = '?qryPOI=' + poiID +
                        '&qryCatCode=' + categoryID +
                        '&qryCatTitle=' + categoryTitle +
                        '&qryLat_POI=' + lat_POI +
                        '&qryLong_POI=' + long_POI;

        //$('a[id|=MapDirections]').attr('href', 'MapDirections.html' + buttonQuerystring);
        $('a[id|=icon-directions]').attr('href', 'ListDirections.html' + buttonQuerystring);

    //Add the title to the header and the info area
        $('#placeTitle').text(title);

   // Add additional information to the top left info area
        $('.top-left #difficulty').text("Difficulty: " + difficulty);
        $('.top-left #trailTime').text("Trail Time: " + trailTime);
        if (trailTime2 != "") {
            $('.top-left #trailTime2').text("Trail Time: " + trailTime2);
        }
        $('.top-left #travelTime').text("Travel Time from WCU: " + travelTime);
        $('.top-left #placePhone').html('<a href="tel:' + phone + ' " >' + phone + "</a>");
        $('.top-left #placeURL').html('<a href="' + url + ' " target="_blank">Website</a>');
        $('.top-left #elevation').text("Elevation: " + elevation);
        $('.top-left #drop').text("Vertical Drop: " + verticalDrop);
        $('.top-left #season').text("Season: " + season);
        $('.top-left #accessrating').text("Access Rating: " + accessRating);
        $('.top-left #class').text("Class: " + riverClass);
        $('.top-left #length').text("Length: " + length);
        $('.top-left #level').text("Level: " + level);
        $('.top-left #put-in').text("Put-in: " + putIn);
        $('.top-left #take-out').text("Take-out: " + takeOut);
        $('#desc').text(desc);

   

    //Display POI Info
    $('input[name|=q]').attr('value', [lat, long]);

    var imageQueryString = 'Display_Image.htm?qryPOI=' + poiID +
                            '&qryCatCode=' + categoryID +
                            '&qryCatTitle=' + categoryTitle +
                            '&qryLat_POI=' + lat_POI +
                            '&qryLong_POI=' + long_POI +
                            '&qryImgFileName=';

    //Build and display first image (if any)
    //This assumes that if we don't have an image1 we don't have any images at all.
    if (image1 != "") {
        $('ul[id|=Gallery] li[id|=1]').html('<a rel="external" id="image1"  href="Images/' + image1 + '"><img id="mainImage" src="Images/' + image1 + '" /></a>');
        $('#Gallery').show();
    }
    else {
        $('span[id|=mainImage]').html('<img id="main" alt="" src="Images/' + "no-image.jpg" + '" />');

        $('ul[id|=Gallery] li[id|=1]').hide();
    }
    //Build and display second image (if any)
    if (image2 != "") {
        $('ul[id|=Gallery] li[id|=2]').html('<a rel="external" href="Images/' + image2 + '"><img class="extra" src="Images/' + image2 + '" /></a>');
        $('#Gallery').show();
    }
    else {
        $('ul[id|=Gallery] li[id|=2]').hide();
    }

    //Build and display third image (if any)
    if (image3 != "") {
        $('ul[id|=Gallery] li[id|=3]').html('<a rel="external" href="Images/' + image3 + '"><img class="extra" src="Images/' + image3 + '" /></a>');
    }
    else {
        $('ul[id|=Gallery] li[id|=3]').hide();
    }

    //Photoswipe function
    var myPhotoSwipe = $("#Gallery a").photoSwipe({ enableMouseWheel: false, enableKeyboard: false });
}

//----------------------------------------------------------------
// Name:  error_GetAllLocations_CallbackFunction
// Description: Function that runs after the failure to retrieve 
// of the JSON object via the Ajax request
//----------------------------------------------------------------
function error_GetAllLocations_CallbackFunction(parXMLHttpRequestObject) {

    //If the info can not be used from the Data_POI.js file, display an error
    alert("Unable to reach server. Please try again later.");
}

//--------------------------------------------------------------------
// Name:  getQuerystring Function
// Description: gets the value equal to "poi" in the url and returns 
// an integer. Additional info about this function can be viewed at
// http://www.bloggingdeveloper.com/post/javascript-querystring-parse
// Get-QueryString-with-Client-Side-JavaScript.aspx
//--------------------------------------------------------------------
function getQuerystring(key, default_) {
    if (default_ === null) default_ = "";
    key = key.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + key + "=([^&#]*)");
    var qs = regex.exec(window.location.href);
    if (qs === null) {
        return default_;
    } else {
        return qs[1];
    }
}