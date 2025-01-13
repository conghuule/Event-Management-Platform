export interface Event{
    id: String;
    title: String;
    description: String;
    date: Date;
    location: String;
    price: Number;
    ticketsAvailable: Number;
}

export interface CreateEventRequest{
    title: String;
    description: String;
    date: Date;
    location: String;
    price: Number;
    ticketsAvailable: Number;
}