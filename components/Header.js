import { Container, Header, Title, Button, Left, Right, Body, Icon } from 'native-base';
export default class HeaderExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
      </Container>
    );
  }
}

//this is wrong, I coppied it from a framework NativeBase and it's just a library, it spit out an error message and I realized that I am making a stupid mistake of limiting us with some half baked libraries. Having said that if you know a good library bring it on