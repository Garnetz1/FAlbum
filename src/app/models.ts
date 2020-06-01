export interface ITrainee {
//     {name: 'Ruky', image: 'ruky.jpg', complexion: 'Black', hobbies: ['Singing', 'Coding', 'Driving']
// }
name: string;
image?: string;
complexion: string;
hobbies: Array<string>;
gender: string;
dateofbirth: string;
almamata: string; 
discipline: string;
id: number;
registereddate: Date;
active?: boolean;
email: string;
telephone: string;
about?: string;
}