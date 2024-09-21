import { Hourglass } from 'react-loader-spinner'


const LoadingSpinner =() => {


    return (
        <div className='d-flex justify-content-center w-100'>
            <Hourglass
                visible={true}
                height="50"
                width="50"
                ariaLabel="hourglass-loading"   
                wrapperStyle={{}}
                wrapperClass=""
                colors={['#eaa157', '#51acd8']}
                />
        </div>
    )
}

export default LoadingSpinner;