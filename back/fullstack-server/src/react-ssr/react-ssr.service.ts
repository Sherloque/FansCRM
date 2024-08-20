import { Injectable } from '@nestjs/common';
import { renderToString } from 'react-dom/server';
import * as React from 'react';
import { StaticRouter } from 'react-router-dom/server';
import { join } from 'path';
import { readFileSync } from 'fs';
import App from '../../../../front/fullstack-front/src/App';

@Injectable()
export class ReactSsrService {
  async render(url: string) {
    const appHtml = renderToString(
      React.createElement(StaticRouter, { location: url }),
    );
    console.log(appHtml);

    const indexHtml = readFileSync(
      join('../../../../', 'front/fullstack-front/build', 'index.html'),
      'utf-8',
    );
    console.log(indexHtml);

    return indexHtml.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`,
    );
  }
}
