import 'mocha';
import { expect } from 'chai';
import Mail from '@/interfaces/HelloWorldMessage';
import HelloWorldService from '@/services/HelloWorldService';
import helloWorldMessage from '@test/data/helloWorldMessage';

describe('HelloWorldService.helloWorld', () => {

  const helloWorldService = new HelloWorldService();
  const message = helloWorldService.helloWorld(helloWorldMessage);

  it('should return a message formatted like: [sender]: [message].', () => {
    expect(message)
      .to.equal('Bob: Hello World');
  });

});
