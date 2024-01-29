import { ApiProperty } from '@nestjs/swagger';

class User {
  @ApiProperty()
  id: number;

  @ApiProperty()
  username: string;

  @ApiProperty()
  nickName: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  phoneNumber: string;

  @ApiProperty()
  isFrozen: boolean;

  @ApiProperty()
  headPhoto: string;

  @ApiProperty()
  createTime: Date;
}

export class UserListVo {
  @ApiProperty({
    type: [User],
  })
  users: User[];

  @ApiProperty()
  totalCount: number;
}
