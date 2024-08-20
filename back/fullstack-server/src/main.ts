import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Request, Response } from 'express';
import { ReactSsrService } from './react-ssr/react-ssr.service';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const reactSsrService = app.get(ReactSsrService);
  app.useStaticAssets(
    join(
      __dirname,
      '..',
      '..',
      '..',
      '..',
      '..',
      '..',
      'front/fullstack-front/build',
      'index.html',
    ),
  );
  const httpAdapter = app.getHttpAdapter();

  httpAdapter.get('*', async (req: Request, res: Response) => {
    try {
      const url = req.url;
      const html = await reactSsrService.render(url);
      res.send(html);
    } catch (error) {
      console.error('Error during SSR:', error);
      res.status(500).send('An error occurred during server-side rendering.');
    }
  });
  app.enableCors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  await app.listen(3001);
}
bootstrap();
