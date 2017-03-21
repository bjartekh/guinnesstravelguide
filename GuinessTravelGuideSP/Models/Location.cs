using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GuinessTravelGuideSP.Models
{
    public class Location
    {

        public int ID { get; set; }
        public string Name { get; set; }
        public string Country { get; set; }
        public string City { get; set; }
        public int Rating { get; set; } 
    }
}