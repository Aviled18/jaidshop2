import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'avinash02',
      email: 'adhsolutionltd1@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'avinash01',
      email: 'avinash01@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Omega58',
      slug: 'omega58',
      category: 'Lubricant',
      image: '/images/omega58.jpeg',
      price: 1000,
      countInStock: 10,
      brand: 'Omega',
      rating: 4.5,
      numReviews: 10,
      description: 'This is Omega58',
    },
    {
      // _id: '2',
      name: 'OvenBrite',
      slug: 'ovenbrite',
      category: 'Kitchen',
      image: '/images/ovenbrite.jpeg',
      price: 500,
      countInStock: 20,
      brand: 'Zep',
      rating: 4.5,
      numReviews: 10,
      description: 'This is OvenBrite',
    },
    {
      // _id: '3',
      name: 'Safety Clean',
      slug: 'safety-clean',
      category: 'maintenance',
      image: '/images/safetyclean.jpeg',
      price: 800,
      countInStock: 25,
      brand: 'Zep',
      rating: 4.0,
      numReviews: 8,
      description: 'This is Sfaety Clean',
    },
  ],
};

export default data;
