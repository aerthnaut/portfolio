var cH = $('#crosshair-h'),
    cV = $('#crosshair-v');

$(document).on('mousemove',function(e){
    cH.css('top',e.pageY);
    cV.css('left',e.pageX);
});

//function updateDateTime() {
  // create a new `Date` object
  //const now = new Date();

  // get the current date and time as a string
  //const currentDateTime = now.toLocaleString();

  // update the `textContent` property of the `span` element with the `id` of `datetime`
  //document.querySelector('#datetime').textContent = currentDateTime;
//}

// call the `updateDateTime` function every second
//setInterval(updateDateTime, 1000);

var coll = document.getElementsByClassName("collapsible");
        var i;
        
        for (i = 0; i < coll.length; i++) {
          coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
              content.style.display = "none";
            } else {
              content.style.display = "block";
            }
          });
        }

        document.getElementById("ultravioletbtn").onclick = function() {
          var rcultraviolet = document.getElementById("rcultraviolet");
          if (rcultraviolet.style.display === "none") {
              rcultraviolet.style.display = "block";rcarchive.style.display="none"; rchuman.style.display = "none"; rccommonsspace.style.display="none"; rcuranus.style.display="none";rcnoaa.style.display="none"; rcrisd.style.display="none"; container_home.style.display="none";
          } else {
              rcultraviolet.style.display = "none";rcarchive.style.display="none"; rchuman.style.display="none"; rccommonsspace.style.display="none"; rcuranus.style.display = "none";rcnoaa.style.display="none"; container_home.style.display="flex"; rcrisd.style.display="none";
          }
        }

          document.getElementById("humanbtn").onclick = function() {
            var rchuman = document.getElementById("rchuman");
            if (rchuman.style.display === "none") {
                rchuman.style.display = "block";rcarchive.style.display="none"; rcultraviolet.style.display = "none"; rccommonsspace.style.display="none"; rcuranus.style.display="none";rcnoaa.style.display="none";container_home.style.display="none";rcrisd.style.display="none";
            } else {
                rchuman.style.display = "none";rcarchive.style.display="none"; rcultraviolet.style.display="none"; rccommonsspace.style.display="none"; rcuranus.style.display = "none";rcnoaa.style.display="none"; container_home.style.display="flex";rcrisd.style.display="none";
            }
        }

        document.getElementById("commonsspacebtn").onclick = function() {
          var rccommonsspace = document.getElementById("rccommonsspace");
          if (rccommonsspace.style.display === "none") {
            rccommonsspace.style.display = "block";rcarchive.style.display="none"; rcultraviolet.style.display = "none"; rcuranus.style.display="none"; rchuman.style.display="none";rcnoaa.style.display="none";container_home.style.display="none";rcrisd.style.display="none";
          } else {
              rcuranus.style.display="none";rcarchive.style.display="none"; rchuman.style.display="none";rcultraviolet.style.display= "none"; rccommonsspace.style.display="none"; rcnoaa.style.display="none"; container_home.style.display="flex";rcrisd.style.display="none";
          }
      }
        
        document.getElementById("uranusbtn").onclick = function() {
          var rcuranus = document.getElementById("rcuranus");
          if (rcuranus.style.display === "none") {
              rcuranus.style.display = "block";rcarchive.style.display="none"; rcultraviolet.style.display = "none"; rccommonsspace.style.display="none"; rchuman.style.display="none";rcnoaa.style.display="none"; container_home.style.display="none";rcrisd.style.display="none";
          } else {
              rcuranus.style.display="none";rcarchive.style.display="none"; rchuman.style.display="none";rcultraviolet.style.display= "none"; rccommonsspace.style.display="none"; rcnoaa.style.display="none"; container_home.style.display="flex";rcrisd.style.display="none";
          }
      }
      
      document.getElementById("noaabtn").onclick = function() {
        var rcnoaa = document.getElementById("rcnoaa");
        if (rcnoaa.style.display === "none") {
            rcnoaa.style.display = "block";rcarchive.style.display="none"; rcultraviolet.style.display = "none"; rccommonsspace.style.display="none"; rchuman.style.display="none";rcuranus.style.display="none"; container_home.style.display="none";rcrisd.style.display="none";
        } else {
            rcuranus.style.display="none";rcarchive.style.display="none"; rchuman.style.display="none";rcultraviolet.style.display= "none"; rccommonsspace.style.display="none"; rcnoaa.style.display="none"; container_home.style.display="flex";rcrisd.style.display="none";
        }
    }

    document.getElementById("archivebtn").onclick = function() {
      var rcarchive = document.getElementById("rcarchive");
      if (rcarchive.style.display === "none") {
          rcarchive.style.display = "block";rcnoaa.style.display="none"; rcultraviolet.style.display = "none"; rccommonsspace.style.display="none"; rchuman.style.display="none";rcuranus.style.display="none"; container_home.style.display="none";rcrisd.style.display="none";
      } else {
          rcuranus.style.display="none";rcarchive.style.display="none"; rchuman.style.display="none";rcultraviolet.style.display= "none"; rccommonsspace.style.display="none"; rcnoaa.style.display="none"; container_home.style.display="flex";rcrisd.style.display="none";
      }
  }

  document.getElementById("risdbtn").onclick = function() {
    var rcrisd = document.getElementById("rcrisd");
    if (rcrisd.style.display === "none") {
        rcrisd.style.display = "block";rcnoaa.style.display="none"; rcultraviolet.style.display = "none"; rccommonsspace.style.display="none"; rchuman.style.display="none";rcuranus.style.display="none"; container_home.style.display="none";rcarchive.style.display="none";
    } else {
        rcuranus.style.display="none";rcarchive.style.display="none"; rchuman.style.display="none";rcultraviolet.style.display= "none"; rccommonsspace.style.display="none"; rcnoaa.style.display="none"; container_home.style.display="flex";rcrisd.style.display="none";
    }
}



      ;
    