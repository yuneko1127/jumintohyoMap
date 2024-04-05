import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'; // leafletのJavaScriptライブラリをインポート
import events from './Events'; // イベントデータをインポート

// カスタムアイコンの定義
// 画像のダウンロードサイト：https://icon-rainbow.com/%E3%83%9E%E3%83%83%E3%83%97%E3%83%94%E3%83%B3%E3%81%AE%E3%82%A2%E3%82%A4%E3%82%B3%E3%83%B3%E7%B4%A0%E6%9D%90-3/
const redIcon = new L.Icon({
  iconUrl: 'images/red_pin.png', // 画像ファイルへのパス
  iconSize: [38, 38], // アイコンのサイズ [幅, 高さ]
  iconAnchor: [19, 38], // アイコンの中心の座標 [x, y]、デフォルトはアイコンの中心
});
const blueIcon = new L.Icon({
  iconUrl: 'images/blue_pin.png', // 画像ファイルへのパス
  iconSize: [38, 38], // アイコンのサイズ [幅, 高さ]
  iconAnchor: [19, 38], // アイコンの中心の座標 [x, y]、デフォルトはアイコンの中心
});

const Map = () => {
  return (
    <MapContainer
      center={[35.69019523333241, 139.69134297724685]}
      zoom={5}
      style={{ height: '100vh', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {events.map(event => {
        if(event.type === 1){
          return(
            <Marker key={event.id} position={event.location} icon={blueIcon}>
            <Popup>
              <div>
                <h3>{event.eventName}</h3>
                <p><strong>場所:</strong> {event.location_name}</p>
                <p><strong>日付:</strong> {event.date}</p>
                <p><strong>出典:</strong> {event.source}</p>
                <p><strong>形式：</strong>条例制定による住民投票</p>
              </div>
            </Popup>
            </Marker>
          );
        } else {
          return null;
        }
      })}
    </MapContainer>
  );
};

export default Map;