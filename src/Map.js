import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet'; // leafletのJavaScriptライブラリをインポート

// カスタムアイコンの定義
const customIcon = new L.Icon({
  iconUrl: 'images/red_pin.png', // 画像ファイルへのパス
  iconSize: [38, 38], // アイコンのサイズ [幅, 高さ]
  iconAnchor: [19, 38], // アイコンの中心の座標 [x, y]、デフォルトはアイコンの中心
});

const events = [
    {
      id: 1,
      eventName: 'Event 1',
      location: [51.505, -0.09],
      date: '2024-03-13',
      time: '10:00 AM',
    },
    {
      id: 2,
      eventName: 'Event 2',
      location: [51.51, -0.1],
      date: '2024-03-14',
      time: '2:00 PM',
    },
    // Add more events data as needed
];

const Map = () => {
  return (
    <MapContainer
      center={[0, 0]}
      zoom={2}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* マーカーとポップアップの追加 */}
      {events.map(event => (
        <Marker key={event.id} position={event.location} icon={customIcon}>
          <Popup>
            <div>
              <h3>{event.eventName}</h3>
              <p><strong>場所:</strong> {event.location.join(', ')}</p>
              <p><strong>日付:</strong> {event.date}</p>
              <p><strong>時間:</strong> {event.time}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;