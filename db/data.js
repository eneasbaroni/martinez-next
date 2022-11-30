const db = [
  {
    id: '1',
    nombre: "La Rufina",
    año: "2022",
    superficie: "250m²",
    tipo: "Casa de Familia",
    descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam",
    seleccionada: true,
    images:[
      "/images/obras/Obra 01/01.jpg",    
      "/images/obras/Obra 01/02.jpg",    
      "/images/obras/Obra 01/03.jpg",    
      "/images/obras/Obra 01/04.jpg",    
      "/images/obras/Obra 01/05.jpg",    
      "/images/obras/Obra 01/06.jpg",    
      "/images/obras/Obra 01/07.jpg",    
      "/images/obras/Obra 01/08.jpg",    
      "/images/obras/Obra 01/09.jpg"    
    ]
  },
  {
    id: '2',
    nombre: "El Terron",
    año: "2021",
    superficie: "250m²",
    tipo: "Casa de Familia",
    descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam",
    seleccionada: false,
    images:[
      "/images/obras/Obra 02/01.jpg",    
      "/images/obras/Obra 02/02.jpg",    
      "/images/obras/Obra 02/03.jpg",    
      "/images/obras/Obra 02/04.jpg",    
      "/images/obras/Obra 02/05.jpg",    
      "/images/obras/Obra 02/06.jpg",    
      "/images/obras/Obra 02/07.jpg",    
      "/images/obras/Obra 02/08.jpg",    
      "/images/obras/Obra 02/09.jpg"     
    ]
  },
  {
    id: '3',
    nombre: "Casa Lopez",
    año: "2020",
    superficie: "250m²",
    tipo: "Casa de Familia",
    descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam",
    seleccionada: false,
    images:[
      "/images/obras/Obra 03/01.jpg",    
      "/images/obras/Obra 03/02.jpg",    
      "/images/obras/Obra 03/03.jpg",    
      "/images/obras/Obra 03/04.jpg",    
      "/images/obras/Obra 03/05.jpg",    
      "/images/obras/Obra 03/06.jpg",    
      "/images/obras/Obra 03/07.jpg",    
      "/images/obras/Obra 03/08.jpg",    
      "/images/obras/Obra 03/09.jpg"     
    ]
  },
  {
    id: '4',
    nombre: "Casa Rocanto",
    año: "2020",
    superficie: "250m²",
    tipo: "Casa de Familia",
    descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam",
    seleccionada: false,
    images:[
      "/images/obras/Obra 04/01.jpg",    
      "/images/obras/Obra 04/02.jpg",    
      "/images/obras/Obra 04/03.jpg",    
      "/images/obras/Obra 04/04.jpg",    
      "/images/obras/Obra 04/05.jpg",    
      "/images/obras/Obra 04/06.jpg",    
      "/images/obras/Obra 04/07.jpg",    
      "/images/obras/Obra 04/08.jpg",    
      "/images/obras/Obra 04/09.jpg"       
    ]
  },
  {
    id: '5',
    nombre: "Gianuzzo",
    año: "2021",
    superficie: "250m²",
    tipo: "Casa de Familia",
    descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam",
    seleccionada: true,
    images:[
      "/images/obras/Obra 05/01.jpg",    
      "/images/obras/Obra 05/02.jpg",    
      "/images/obras/Obra 05/03.jpg",    
      "/images/obras/Obra 05/04.jpg",    
      "/images/obras/Obra 05/05.jpg",    
      "/images/obras/Obra 05/06.jpg",    
      "/images/obras/Obra 05/07.jpg",    
      "/images/obras/Obra 05/08.jpg",    
      "/images/obras/Obra 05/09.jpg"      
    ]
  },
  {
    id: '6',
    nombre: "El Pueblo",
    año: "2021",
    superficie: "250m²",
    tipo: "Casa de Familia",
    descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam",
    seleccionada: false,
    images:[
      "/images/obras/Obra 06/01.jpg",    
      "/images/obras/Obra 06/02.jpg",    
      "/images/obras/Obra 06/03.jpg",    
      "/images/obras/Obra 06/04.jpg",    
      "/images/obras/Obra 06/05.jpg",    
      "/images/obras/Obra 06/06.jpg",    
      "/images/obras/Obra 06/07.jpg",    
      "/images/obras/Obra 06/08.jpg",    
      "/images/obras/Obra 06/09.jpg"    
    ]
  },
  {
    id: '7',
    nombre: "Tarraubella",
    año: "2020",
    superficie: "250m²",
    tipo: "Casa de Familia",
    descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam",
    seleccionada: true,
    images:[
      "/images/obras/Obra 07/01.jpg",    
      "/images/obras/Obra 07/02.jpg",    
      "/images/obras/Obra 07/03.jpg",    
      "/images/obras/Obra 07/04.jpg",    
      "/images/obras/Obra 07/05.jpg",    
      "/images/obras/Obra 07/06.jpg",    
      "/images/obras/Obra 07/07.jpg",    
      "/images/obras/Obra 07/08.jpg",    
      "/images/obras/Obra 07/09.jpg"      
    ]
  },
  {
    id: '8',
    nombre: "Casa Salomon",
    año: "2020",
    superficie: "250m²",
    tipo: "Casa de Familia",
    descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam",
    seleccionada: false,
    images:[
      "/images/obras/Obra 08/01.jpg",    
      "/images/obras/Obra 08/02.jpg",    
      "/images/obras/Obra 08/03.jpg",    
      "/images/obras/Obra 08/04.jpg",    
      "/images/obras/Obra 08/05.jpg",    
      "/images/obras/Obra 08/06.jpg",    
      "/images/obras/Obra 08/07.jpg",    
      "/images/obras/Obra 08/08.jpg",    
      "/images/obras/Obra 08/09.jpg"      
    ]
  },
  {
    id: '9',
    nombre: "Punta Peñon",
    año: "2020",
    superficie: "250m²",
    tipo: "Casa de Familia",
    descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam",
    seleccionada: false,
    images:[
      "/images/obras/Obra 10/01.jpg",    
      "/images/obras/Obra 10/02.jpg",    
      "/images/obras/Obra 10/03.jpg",    
      "/images/obras/Obra 10/04.jpg",    
      "/images/obras/Obra 10/05.jpg",    
      "/images/obras/Obra 10/06.jpg",    
      "/images/obras/Obra 10/07.jpg",    
      "/images/obras/Obra 10/08.jpg",    
      "/images/obras/Obra 10/09.jpg"      
    ]
  },
]

export default db





