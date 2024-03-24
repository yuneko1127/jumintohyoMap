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
      eventName: '原子力発電所建設についての住民投票',
      location_name: '新潟県巻町（現在 新潟市）',
      location: [37.91637967784871, 139.03616586665956],
      date: '1996-08-04',
      source:"一般財団法人地方自治研究機構",
    },
    {
      id: 2,
      eventName: '日米地位協定の見直し及び基地の整理縮小に関する県民投票',
      location_name: '沖縄県',
      location: [26.212778735226753, 127.68079498540686],
      date: '1996-09-08',
      source:"一般財団法人地方自治研究機構",
    }
];

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
      {/* マーカーとポップアップの追加 */}
      {events.map(event => (
        <Marker key={event.id} position={event.location} icon={customIcon}>
          <Popup>
            <div>
              <h3>{event.eventName}</h3>
              <p><strong>場所:</strong> {event.location_name}</p>
              <p><strong>日付:</strong> {event.date}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;