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
      "/images/obras/prueba01.jpg",    
      "/images/obras/prueba01b.jpg",    
      "/images/obras/prueba02.jpg",    
      "/images/obras/prueba03.jpg",    
      "/images/obras/prueba04.jpg",    
      "/images/obras/prueba05.jpg",    
      "/images/obras/prueba06.jpg",    
      "/images/obras/prueba07.jpg",    
      "/images/obras/prueba08.jpg"    
    ]
  },
  {
    id: '2',
    nombre: "El Terron",
    año: "2021",
    superficie: "250m²",
    tipo: "Casa de Familia",
    descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam",
    seleccionada: true,
    images:[
      "/images/obras/prueba02.jpg",    
      "/images/obras/prueba02b.jpg",    
      "/images/obras/prueba01.jpg",    
      "/images/obras/prueba03.jpg",    
      "/images/obras/prueba04.jpg",    
      "/images/obras/prueba05.jpg",    
      "/images/obras/prueba06.jpg",    
      "/images/obras/prueba07.jpg",    
      "/images/obras/prueba08.jpg"   
    ]
  },
  {
    id: '3',
    nombre: "Casa Lopez",
    año: "2020",
    superficie: "250m²",
    tipo: "Casa de Familia",
    descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam",
    seleccionada: true,
    images:[
      "/images/obras/prueba04.jpg",    
      "/images/obras/prueba04b.jpg",    
      "/images/obras/prueba02.jpg",    
      "/images/obras/prueba03.jpg",    
      "/images/obras/prueba04.jpg",    
      "/images/obras/prueba05.jpg",    
      "/images/obras/prueba06.jpg",    
      "/images/obras/prueba07.jpg",    
      "/images/obras/prueba08.jpg"    
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
      "/images/obras/prueba05.jpg",    
      "/images/obras/prueba01.jpg",    
      "/images/obras/prueba02.jpg",    
      "/images/obras/prueba03.jpg",    
      "/images/obras/prueba04.jpg",    
      "/images/obras/prueba05.jpg",    
      "/images/obras/prueba06.jpg",    
      "/images/obras/prueba07.jpg",    
      "/images/obras/prueba08.jpg"     
    ]
  },
  {
    id: '5',
    nombre: "Gianuzzo",
    año: "2021",
    superficie: "250m²",
    tipo: "Casa de Familia",
    descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam",
    seleccionada: false,
    images:[
      "/images/obras/prueba03.jpg",    
      "/images/obras/prueba01.jpg",    
      "/images/obras/prueba02.jpg",    
      "/images/obras/prueba03.jpg",    
      "/images/obras/prueba04.jpg",    
      "/images/obras/prueba05.jpg",    
      "/images/obras/prueba06.jpg",    
      "/images/obras/prueba07.jpg",    
      "/images/obras/prueba08.jpg"    
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
      "/images/obras/prueba06.jpg",    
      "/images/obras/prueba01.jpg",    
      "/images/obras/prueba02.jpg",    
      "/images/obras/prueba03.jpg",    
      "/images/obras/prueba04.jpg",    
      "/images/obras/prueba05.jpg",    
      "/images/obras/prueba06.jpg",    
      "/images/obras/prueba07.jpg",    
      "/images/obras/prueba08.jpg"   
    ]
  },
  {
    id: '7',
    nombre: "Tarraubella",
    año: "2020",
    superficie: "250m²",
    tipo: "Casa de Familia",
    descripcion: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam",
    seleccionada: false,
    images:[
      "/images/obras/prueba07.jpg",    
      "/images/obras/prueba01.jpg",    
      "/images/obras/prueba02.jpg",    
      "/images/obras/prueba03.jpg",    
      "/images/obras/prueba04.jpg",    
      "/images/obras/prueba05.jpg",    
      "/images/obras/prueba06.jpg",    
      "/images/obras/prueba07.jpg",    
      "/images/obras/prueba08.jpg"     
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
      "/images/obras/prueba08.jpg",    
      "/images/obras/prueba01.jpg",    
      "/images/obras/prueba02.jpg",    
      "/images/obras/prueba03.jpg",    
      "/images/obras/prueba04.jpg",    
      "/images/obras/prueba05.jpg",    
      "/images/obras/prueba06.jpg",    
      "/images/obras/prueba07.jpg",    
      "/images/obras/prueba08.jpg"     
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
      "/images/obras/prueba09.jpg",    
      "/images/obras/prueba01.jpg",    
      "/images/obras/prueba02.jpg",    
      "/images/obras/prueba03.jpg",    
      "/images/obras/prueba04.jpg",    
      "/images/obras/prueba05.jpg",    
      "/images/obras/prueba06.jpg",    
      "/images/obras/prueba07.jpg",    
      "/images/obras/prueba08.jpg"     
    ]
  },
]

export default db





