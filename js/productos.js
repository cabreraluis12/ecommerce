const productos = [
    {id:1, nombre:"Procesador Intel Core i5 11400 4.4 Ghz Rocket Lake 1200", componente:"Procesador", marca:"intel", precio:58669, imagen:"intel-i5-11400.png", socket:"LGA1200"},
    {id:2, nombre:"Procesador Intel Core i7 12700K 5.0 Ghz Alder Lake 1700", componente:"Procesador", marca:"intel", precio:154999, imagen:"intel-i7-12700k.png", socket:"LGA1700"},
    {id:3, nombre:"Procesador Intel Core i9 13900K 5.8 Ghz Raptor Lake 1700", componente:"Procesador", marca:"intel", precio:299900, imagen:"intel-i9-13900k.png", socket:"LGA1700"},
    {id:4, nombre:"Procesador Amd Ryzen 5 5600X 3.7 Ghz", componente:"Procesador", marca:"AMD", precio:79999, imagen:"ryzen-5-5600x.png", socket:"AM4"},
    {id:5, nombre:"Procesador Amd Ryzen 7 5700G 4.6 Ghz", componente:"Procesador", marca:"AMD", precio:83389, imagen:"ryzen-7-5700g.png", socket:"AM4"},
    {id:6, nombre:"Procesador Amd Ryzen 9 7950X 5.7 Ghz", componente:"Procesador", marca:"AMD", precio:239989, imagen:"ryzen-9-7950X.png"},
    {id:7, nombre:"Motherboard 1200 10°Gen - Asus Prime B460M-A R2.0", componente:"Motherboard", marca:"Asus", precio:25499, imagen:"mother-b460m.png", socket:"LGA1200"},
    {id:8, nombre:"Motherboard AM4 - Asrock B550M HDV", componente:"Motherboard", marca:"Asrock", precio:27999, imagen:"mother-B550M.png", socket:"AM4"},
    {id:9, nombre:"Motherboard 1700 12°Gen - Gigabyte GA-Z690 GAMING X DDR4", componente:"Motherboard", marca:"Gigabyte", precio:92999, imagen:"mother-z690.png", socket:"LGA1700"},
    {id:10, nombre:"Memoria Ram DDR4 - 4Gb 2666 Mhz Adata Value", componente:"Memoria Ram", marca:"Adata", precio:10009, imagen:"ram-ddr4-4gb-2666.png"},
    
];

const guardarProductosLS = (productos) => {
    localStorage.setItem("productos", JSON.stringify(productos));
}

const cargarProductosLS = () => {
    return JSON.parse(localStorage.getItem("productos")) || [];
}

guardarProductosLS(productos);