import { Controller, Get, Query, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { ReactSsrService } from './react-ssr.service';

@Controller('*')
export class ReactSsrController {
  constructor(private readonly reactSsrService: ReactSsrService) {}

  @Get('*')
  async render(@Query('url') url: string) {
    try {
      console.log('Handling request for URL:', url);
      const html = await this.reactSsrService.render(url);
      return html;
    } catch (error) {
      console.error('Error rendering page:', error);
      return 'An error occurred';
    }
  }
}
