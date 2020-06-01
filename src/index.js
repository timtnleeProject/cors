import app from './site';
import malicious from './malicious';

app.listen(8000, () => {
  console.log('server start');
});

malicious.listen(7000, () => {
  console.log('server start');
});
