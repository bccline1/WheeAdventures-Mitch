using System;
using System.Data;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;

/// <summary>
/// Summary description for TO_POI
/// </summary>
public class TO_POI
{
    private string _POI_ID;
    private decimal _POI_Latitude;
    private decimal _POI_Logitude;
    private string _POI_Title;
    private string _POI_Description;
    private string _POI_Image1;
    private string _POI_Category;
    private string _POI_Difficulty;
    private string _POI_TrailTime;
    private string _POI_TrailTime2;
    private string _POI_TravelTime;
    private string _POI_Phone;
    private string _POI_URL;
    private string _POI_Elevation;
    private string _POI_VerticalDrop;
    private string _POI_Additional_Info;
    private string _POI_Season;
    private string _POI_Highlights;
    private string _POI_AccessRating;
    private string _POI_Class;
    private string _POI_Length;
    private string _POI_Level;
    private string _POI_Put_In;
    private string _POI_Take_Out;
  


	public TO_POI()
	{
		//
		// TODO: Add constructor logic here
		//
	}

    public TO_POI(string parPOI_ID, decimal parPOI_Latitude, decimal parPOI_Longitude, 
                  string parPOI_title, string parPOI_Description, 
                  string parPOI_Image1, string parPOI_Category, string parPOI_Difficulty,
                  string parPOI_TrailTime, string parPOI_TrailTime2, string parPOI_TravelTime, string parPOI_Phone,
                  string parPOI_URL, string parPOI_Elevation, string parPOI_VerticalDrop, string parPOI_Additional_Info,
                  string parPOI_Season,string parPOI_Highlights, string parPOI_AccessRating, string parPOI_Class, string parPOI_Length,
                  string parPOI_Level, string parPOI_Put_In, string parPOI_Take_Out)
    {
        _POI_ID = parPOI_ID;
        _POI_Latitude = parPOI_Latitude;
        _POI_Logitude = parPOI_Longitude;
        _POI_Title = parPOI_title;
        _POI_Description = parPOI_Description;
        _POI_Image1 = parPOI_Image1;
        _POI_Category = parPOI_Category;
        _POI_Difficulty = parPOI_Difficulty;
        _POI_TrailTime = parPOI_TrailTime;
        _POI_TrailTime2 = parPOI_TrailTime2;
        _POI_TravelTime = parPOI_TravelTime;
        _POI_Phone = parPOI_Phone;
        _POI_URL = parPOI_URL;
        
        _POI_Elevation = parPOI_Elevation;
        _POI_VerticalDrop = parPOI_VerticalDrop;
        _POI_Additional_Info = parPOI_Additional_Info;
        _POI_Season = parPOI_Season;
        _POI_Highlights = parPOI_Highlights;
        _POI_AccessRating = parPOI_AccessRating;
        _POI_Class = parPOI_Class;
        _POI_Length = parPOI_Length;
        _POI_Level = parPOI_Level;
        _POI_Put_In = parPOI_Put_In;
        _POI_Take_Out = parPOI_Take_Out;
    }

    public string POI_ID
    {
        get
        {
            return _POI_ID;
        }
        set
        {
            _POI_ID = value;
        }
    }
    public decimal POI_Latitude
    {
        get
        {
            return _POI_Latitude;
        }
        set
        {
            _POI_Latitude = value;
        }
    }
    public decimal POI_Longitude
    {
        get
        {
            return _POI_Logitude;
        }
        set
        {
            _POI_Logitude = value;
        }
    }
    public string POI_Title
    {
        get
        {
            return _POI_Title;
        }
        set
        {
            _POI_Title = value;
        }
    }
    public string POI_Description
    {
        get
        {
            return _POI_Description;
        }
        set
        {
            _POI_Description = value;
        }
    }
    public string POI_Image1
    {
        get
        {
            return _POI_Image1;
        }
        set
        {
            _POI_Image1 = value;
        }
    }
    
    public string POI_Category
    {
        get
        {
            return _POI_Category;
        }
        set
        {
            _POI_Category = value;
        }
    }

    public string POI_Difficulty
    {
        get
        {
            return _POI_Difficulty;
        }
        set
        {
            _POI_Difficulty = value;
        }
    }

    public string POI_TrailTime
    {
        get { return _POI_TrailTime; }
        set { _POI_TrailTime = value; }
    }

    public string POI_TrailTime2
    {
        get { return _POI_TrailTime2; }
        set { _POI_TrailTime2 = value; }
    }

    public string POI_TravelTime
    {
        get { return _POI_TravelTime; }
        set { _POI_TravelTime = value; }
    }

    public string POI_Phone
    {
        get { return _POI_Phone; }
        set { _POI_Phone = value; }
    }

    public string POI_URL
    {
        get { return _POI_URL; }
        set { _POI_URL = value; }
    }

    public string POI_Additional_Info
    {
        get { return _POI_Additional_Info; }
        set { _POI_Additional_Info = value; }
    }

    public string POI_Elevation
    {
        get { return _POI_Elevation; }
        set { _POI_Elevation = value; }
    }

    public string POI_VerticalDrop
    {
        get { return _POI_VerticalDrop; }
        set { _POI_VerticalDrop = value; }
    }

    public string POI_Season
    {
        get { return _POI_Season; }
        set { _POI_Season = value; }
    }

    public string POI_Highlights
    {
        get { return _POI_Highlights; }
        set { _POI_Highlights = value; }
    }

    public string POI_AccessRating
    {
        get { return _POI_AccessRating; }
        set { _POI_AccessRating = value; }
    }

    public string POI_Class
    {
        get { return _POI_Class; }
        set { _POI_Class = value; }
    }

    public string POI_Length
    {
        get { return _POI_Length; }
        set { _POI_Length = value; }
    }

    public string POI_Level
    {
        get { return _POI_Level; }
        set { _POI_Level = value; }
    }

    public string POI_Put_In
    {
        get { return _POI_Put_In; }
        set { _POI_Put_In = value; }
    }

    public string POI_Take_Out
    {
        get { return _POI_Take_Out; }
        set { _POI_Take_Out = value; }
    }
}