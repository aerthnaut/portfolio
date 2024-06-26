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
              rcultraviolet.style.display = "block";rchuman.style.display = "none"; rccommonsspace.style.display="none"; rcuranus.style.display="none";rcnoaa.style.display="none";
          } else {
              rcultraviolet.style.display = "none";rchuman.style.display="none"; rccommonsspace.style.display="none"; rcuranus.style.display = "none";rcnoaa.style.display="none";
          }
        }

          document.getElementById("humanbtn").onclick = function() {
            var rchuman = document.getElementById("rchuman");
            if (rchuman.style.display === "none") {
                rchuman.style.display = "block";rcultraviolet.style.display = "none"; rccommonsspace.style.display="none"; rcuranus.style.display="none";rcnoaa.style.display="none";
            } else {
                rchuman.style.display = "none";rcultraviolet.style.display="none"; rccommonsspace.style.display="none"; rcuranus.style.display = "none";rcnoaa.style.display="none";
            }
        }

        document.getElementById("commonsspacebtn").onclick = function() {
          var rccommonsspace = document.getElementById("rccommonsspace");
          if (rccommonsspace.style.display === "none") {
            rccommonsspace.style.display = "block";rcultraviolet.style.display = "none"; rcuranus.style.display="none"; rchuman.style.display="none";rcnoaa.style.display="none";
          } else {
              rcuranus.style.display="none";rchuman.style.display="none";rcultraviolet.style.display= "none"; rccommonsspace.style.display="none"; rcnoaa.style.display="none";
          }
      }
        
        document.getElementById("uranusbtn").onclick = function() {
          var rcuranus = document.getElementById("rcuranus");
          if (rcuranus.style.display === "none") {
              rcuranus.style.display = "block";rcultraviolet.style.display = "none"; rccommonsspace.style.display="none"; rchuman.style.display="none";rcnoaa.style.display="none";
          } else {
              rcuranus.style.display="none";rchuman.style.display="none";rcultraviolet.style.display= "none"; rccommonsspace.style.display="none"; rcnoaa.style.display="none";
          }
      }
      
      document.getElementById("noaabtn").onclick = function() {
        var rcnoaa = document.getElementById("rcnoaa");
        if (rcnoaa.style.display === "none") {
            rcnoaa.style.display = "block";rcultraviolet.style.display = "none"; rccommonsspace.style.display="none"; rchuman.style.display="none";rcuranus.style.display="none";
        } else {
            rcuranus.style.display="none";rchuman.style.display="none";rcultraviolet.style.display= "none"; rccommonsspace.style.display="none"; rcnoaa.style.display="none";
        }
    }
      ;
    