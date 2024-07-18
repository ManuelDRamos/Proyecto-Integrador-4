import { Injectable } from '@nestjs/common';

type User = {
  id: number;
  email: string;
  name: string;
  password: string;
  address: string;
  phone: string;
  country?: string | undefined;
  city?: string | undefined;
};

@Injectable()
export class UsersRepository {
  private users: User[] = [
    {
      id: 1,
      email: 'john.doe@example.com',
      name: 'John Doe',
      password: 'password123',
      address: '123 Main St',
      phone: '+1234567890',
      country: 'USA',
      city: 'New York',
    },
    {
      id: 2,
      email: 'jane.smith@example.com',
      name: 'Jane Smith',
      password: 'password456',
      address: '456 Oak St',
      phone: '+1234567891',
      country: 'USA',
      city: 'Los Angeles',
    },
    {
      id: 3,
      email: 'michael.brown@example.com',
      name: 'Michael Brown',
      password: 'password789',
      address: '789 Pine St',
      phone: '+1234567892',
      country: 'Canada',
      city: 'Toronto',
    },
    {
      id: 4,
      email: 'emily.jones@example.com',
      name: 'Emily Jones',
      password: 'password101',
      address: '101 Maple St',
      phone: '+1234567893',
      country: 'Canada',
      city: 'Vancouver',
    },
    {
      id: 5,
      email: 'david.wilson@example.com',
      name: 'David Wilson',
      password: 'password202',
      address: '202 Birch St',
      phone: '+1234567894',
      country: 'UK',
      city: 'London',
    },
    {
      id: 6,
      email: 'sarah.taylor@example.com',
      name: 'Sarah Taylor',
      password: 'password303',
      address: '303 Cedar St',
      phone: '+1234567895',
      country: 'UK',
      city: 'Manchester',
    },
    {
      id: 7,
      email: 'daniel.martin@example.com',
      name: 'Daniel Martin',
      password: 'password404',
      address: '404 Spruce St',
      phone: '+1234567896',
      country: 'Australia',
      city: 'Sydney',
    },
    {
      id: 8,
      email: 'laura.clark@example.com',
      name: 'Laura Clark',
      password: 'password505',
      address: '505 Elm St',
      phone: '+1234567897',
      country: 'Australia',
      city: 'Melbourne',
    },
    {
      id: 9,
      email: 'robert.lee@example.com',
      name: 'Robert Lee',
      password: 'password606',
      address: '606 Willow St',
      phone: '+1234567898',
      country: 'New Zealand',
      city: 'Auckland',
    },
    {
      id: 10,
      email: 'jessica.harris@example.com',
      name: 'Jessica Harris',
      password: 'password707',
      address: '707 Cherry St',
      phone: '+1234567899',
      country: 'New Zealand',
      city: 'Wellington',
    },
  ];
  getUsers() {
    return this.users;
  }
}
