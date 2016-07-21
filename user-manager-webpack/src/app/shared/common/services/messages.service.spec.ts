import { MessagesService } from './messages.service';

describe('Message service', () => {
  let messageService: MessagesService;

  beforeEach(() => {
    messageService = new MessagesService;
  })

  it('Should return required message', () => {
    expect(messageService.required('Name')).toEqual('Name is required.');
  });

  it('Should return invalid message', () => {
    expect(messageService.invalid('Name')).toEqual('Name is invalid.');
  });
});
