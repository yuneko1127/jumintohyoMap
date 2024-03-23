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
      {/* マーカーの追加 */}
      <Marker position={[51.505, -0.09]} icon={customIcon}>
        {/* マーカーがクリックされたときのポップアップ */}
        <Popup>
          Example Popup Content
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;