//producto.jsx

import React from "react";
const productos = [
    { name: 'Gibson LP Standard 1986', description: 'Guitarra LP HH Cuerpo sólido del año 1986 con acabado Sunburst', image: 'https://i.ibb.co/1nfVbyv/lfhzzgtrdtqwwmprye0u.webp', categoria: 'electrica' },
    { name: 'Fender Telecaster American Deluxe Edition 1972', description: 'Guitarra Telecaster HH Cuerpo sólido basada en las series del 72 con acabado negro', image: 'https://i.ibb.co/p4BdSvY/cx5zxkz9bba33rus1ih3.webp', categoria: 'electrica' },
    { name: 'Ibanez SLM 10 Scott LePage Signature', description: 'Guitarra HSS Cuerpo sólido con puente tremolo en acabado Rojo Mate Transparente', image: 'https://i.ibb.co/jgW12yb/fnfycr9jz0gdowy9hupk.webp', categoria: 'electrica' },
    { name: 'Jackson X Series MF-1 Marty Friedman Signature', description: 'Guitarra HH Cuerpo sólido signature de Marty Friedman', image: 'https://i.ibb.co/PGp3Gbz/rubkj4o1bgifrvdkh6pv.webp', categoria: 'electrica' },
    { name: 'Ibanez Jem Junior Steve Vai Signature', description: 'Guitarra HSH Cuerpo sólido con puente flotante signature de Steve Vai', image: 'https://i.ibb.co/3Cs2Xtv/dgzipou7uwdnbam1lrsm.webp', categoria: 'electrica' },    

    { name: 'Epiphone J-45 Studio Version', description: 'Guitarra Epiphone Acústica de estudio con corte dreadnought acabado negro mate', image: 'https://i.ibb.co/JyDYqmN/Epiphone-J-45-Studio-Vintage-Sunburst-579-01-compress-1-1.jpg', categoria: 'acustica' },
    { name: 'Takamine GD30 Dreadnought cut 12 strings', description: 'Guitarra Takamine de 12 cuerdas con corte dreadnought acabado natural', image: 'https://i.ibb.co/5ssFcF2/GD30-CE12-NT-1-1.jpg', categoria: 'acustica' },
    { name: 'Ibanez TOD10N Tim Henson Signature Nylon strings', description: 'Guitarra ElectrocLásica con cuerdas de nylon signature de tim henson acabado gris mate', image: 'https://i.ibb.co/qJH3WWj/lg0d4rdnnvr0e0xw8eqo.webp', categoria: 'acustica' },    

    { name: 'Ibanez TS9 Tube Screamer', description: 'Pedal de overdrive y boost Ibanez Tube Screamer fabricado en Japón', image: 'https://rvb-img.reverb.com/image/upload/s--stLBWysm--/f_auto,t_large/v1571936093/ovhshifio9mcdgzy73sg.png', categoria: 'pedal' },
    { name: 'Boss TU-3 Chromatic Tuner', description: 'Pedal de afinador Boss Chromatic Tuner fabricado en Taiwán', image: 'https://rvb-img.reverb.com/image/upload/s--hmXo0m9f--/f_auto,t_large/v1440811836/n4mg2ipkfa4eim4jqqh2.jpg', categoria: 'pedal' },
    { name: 'Boss MT-2 Metal Zone', description: 'Pedal de distorsión Boss Metal Zone fabricado en Taiwán', image: 'https://rvb-img.reverb.com/image/upload/s--iF0I17s7--/f_auto,t_large/v1487719503/e2f6igdvsveiuewrzwak.jpg', categoria: 'pedal' }, 

    { name: 'Fender Twin Reverb Deluxe 2 channel 2x12 100 Watt', description: 'Amplificador Fender Combo clean con 2 canales, 2 bocinas de 12 pulgadas y spring reverb', image: 'https://rvb-img.reverb.com/image/upload/s--b5gB2zl3--/f_auto,t_large/v1614291992/rspv4rn3x4nwtrjhihnz.jpg', categoria: 'amplificador' },
    { name: 'Marshall Classic JCM-800 Lead Series 20 Watt', description: 'Amplificador Marshall Cabezal Crunch con 2 entradas y preamp', image: 'https://rvb-img.reverb.com/image/upload/s--zHQLUX2R--/f_auto,t_large/v1630096771/qbxe5owaw7183g3knkr6.jpg', categoria: 'amplificador' },
    { name: 'Mesa Boogie Dual Rectifier 3 channel 100 Watt', description: 'Amplificador Mesa Cabezal High Gain con 3 canales', image: 'https://rvb-img.reverb.com/image/upload/s--zcJQw5YH--/f_auto,t_large/v1598648731/bajczqfedkrtrox2ks6i.jpg', categoria: 'amplificador' },
    
    { name: 'Cable TS Ernie Ball Mallado', description: 'Cable para guitarra eléctrica de 10 pulgadas entrada TS', image: 'https://rvb-img.reverb.com/image/upload/s--WNjQHx8---/f_auto,t_large/v1637102344/beyrv8jjgjz0yus33bgy.jpg', categoria: 'accesorio' },
    { name: 'Capotraste Dunlop 83C Curvado', description: 'Capotraste para guitarra marca Dunlop', image: 'https://rvb-img.reverb.com/image/upload/s--OgRbjRsa--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_620,q_90,w_620/v1437754763/j22at8g6r2ixyvb92gzq.jpg', categoria: 'accesorio' },
    { name: 'Cuerdas D Addario XL Super Light 08-38', description: 'Cuerdas para guitarra electrica calibre ultra ligero 08', image: 'https://rvb-img.reverb.com/image/upload/s--_-R7F1cU--/f_auto,t_large/v1599567384/gqugmizzykesqzb1bs8s.jpg', categoria: 'accesorio' },
    { name: 'Puas Dunloc Tortex Standard .88', description: 'Pack de 12 puas marca dunloc forma estándar .88mm', image: 'https://rvb-img.reverb.com/image/upload/s--6-OwyE8R--/f_auto,t_large/v1587057457/ohbe1gfnofeqibejbieb.jpg', categoria: 'accesorio' },


];
  
  const Producto = () => {
    return { products: productos };
  };
  
  export default Producto;
  