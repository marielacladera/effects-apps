export class User {

  private avatar: string;
  private email: string;
  private firstName: string;
  private id: number;
  private lastName: string;

  public static createUser({ first_name, last_name, avatar, email, id }: any): User{
    return new User(first_name, last_name, avatar, email, id);
  }

  constructor(
    firstName: string,
    lastName: string,
    avatar: string,
    email: string,
    id: number
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.email =  email;
    this.id = id
  }

  public getAvatar(): string {
    return this.avatar;
  }

  public getEmail(): string {
    return this.email
  }

  public getFirstName(): string {
    return this.firstName
  }

  public getId(): number {
    return this.id;
  }

  public getLastName(): string {
    return this.lastName;
  }

  public setAvatar(avatar: string): void {
    this.avatar = avatar;
  }

  public setEmail(email: string): void {
    this.email = email;
  }

  public setFirstName(firstName: string): void {
    this.firstName = firstName;
  }

  public setId(id: number): void {
    this.id = id;
  }

  public setLastName(lastName: string): void {
    this.lastName = lastName;
  }

}
