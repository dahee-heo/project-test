import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
// import { NaverMap, RenderAfterNavermapsLoaded } from 'react-naver-maps';

const NaverMapView = () => {

  const [position, setPosition] = useState({ x: null, y: null });


  useEffect(() => {
    const mapDiv = document.getElementById("map");
    const map = new window.naver.maps.Map(mapDiv);

    window.naver.maps.Event.addDOMListener(mapDiv, "click", () => {
      const coordinate = { x: map.data.map.center.x, y: map.data.map.center.y };
      setPosition({ x: coordinate.x, y: coordinate.y });
    });
  }, []);

  return (
    <div>
      <div id="map" style={{ width: "400px", height: "400px" }} />
      <div>x좌표: {position.x}, y좌표: {position.y}</div>
      <div></div>
    </div>
  );
}

export default NaverMapView