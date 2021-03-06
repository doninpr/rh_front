import NgwConnector from '@nextgis/ngw-connector';
import config from '../../config.json';

const ngwUrl = config.baseUrl;

const connector = new NgwConnector({
  baseUrl: ngwUrl
});

export {connector};
