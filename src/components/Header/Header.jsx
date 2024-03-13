import profile from '../../assets/images/profile.png'

const Header = () => {
    
    return (
        // max-w-6xl my-12 mx-auto
        <header className='flex justify-between items-center p-4 mx-4 border-b-2 '>
            <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;