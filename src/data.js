const data = {
  users: [
    {
      firstname: 'Preppy',
      lastname: 'Nino',
      email: 'admin@example.com',
      profil: '',
      username:'',
      password: "123456",
      isAdmin: true,
      isClient: true,
    },
    {
    
      firstname: 'John',
      lastname: 'User',
      email: 'user@example.com',
      profil: '',
      username:'',
      password: "12345",
      isAdmin: false,
      isClient:true,
    },
  ],
  prestations: [
    {
      name:"Électricité",
      icon:"",
      services:[
        'Installation',
        'Dépannage',
        'Diagonostique',
        'Controls',
      ],
      needs:[
        'Prise',
        'Interrupteur',
        'Dijoncteur',
        'Diagonostique',
        'Diagonostique',
      ],
      description:"",

    }
],
};
export default data;