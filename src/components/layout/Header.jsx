import Stack from 'react-bootstrap/Stack'
import Button from 'react-bootstrap/Button'
import '../../styles/scss/Header.scss'

function Header() {
    return (
        <div className="header_wrap">
            <Stack>
                <div className="p-2">
                    <Button>Light</Button>
                </div>
            </Stack>
        </div>
    );
}

export default Header;