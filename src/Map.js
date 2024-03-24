import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'; // leafletのJavaScriptライブラリをインポート
import events from './Events'; // イベントデータをインポート

// カスタムアイコンの定義
const customIcon = new L.Icon({
  iconUrl: 'images/red_pin.png', // 画像ファイルへのパス
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
      {events.map(event => (
        <Marker key={event.id} position={event.location} icon={customIcon}>
          <Popup>
            <div>
              <h3>{event.eventName}</h3>
              <p><strong>場所:</strong> {event.location_name}</p>
              <p><strong>日付:</strong> {event.date}</p>
              <p><strong>出典:</strong> {event.source}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;