function map(o){google.maps.Map.prototype.setCenterWithOffset=function(o,e,n){var a=this,t=new google.maps.OverlayView;t.onAdd=function(){var t=this.getProjection(),p=t.fromLatLngToContainerPixel(o);p.x=p.x+e,p.y=p.y+n,a.panTo(t.fromContainerPixelToLatLng(p))},t.draw=function(){},t.setMap(this)};for(var e=new Array,n=(new google.maps.InfoWindow({}),[[new google.maps.LatLng(53.819055,27.8813694)]]),a={zoom:10,panControl:!1,mapTypeControl:!1,center:n[0][0],scrollwheel:!1,mapTypeId:google.maps.MapTypeId.ROADMAP},t=new google.maps.Map(document.getElementById("map"),a),p=(new google.maps.Size(18,20),new google.maps.Point(9,10),0);p<n.length;p++){var g=new google.maps.Marker({position:n[p][0],map:t});e.push(g)}}$("#map").length>0&&map();