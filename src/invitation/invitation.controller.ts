import { Controller, Get, Render } from '@nestjs/common';

@Controller('invitation')
export class InvitationController {
  @Get()
  @Render('invitation')
  invitation() {
    const imgArr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const weddingYear = 2024;
    const weddingMonth = 10;
    const weddingDate = 5;
    const data = {
      imgArr,
      weddingYear,
      weddingMonth,
      weddingDate,
    };
    return data;
  }
}
