import * as htmlToImage from 'html-to-image';

const ActionBtns = ({text, setText}) => {
    const handleReset = () => {
        setText("");
    }

    const handleExport = () => {
        const node = document.querySelector('.code__preview__container');
        htmlToImage.toSvg(node)
            .then((dataUrl) => {
                const link = document.createElement('a');
                const currentTime = new Date().getTime();
                link.target = '_blank';
                link.download = currentTime + 'code-preview.svg';
                link.href = dataUrl;
                link.click();
            })
            .catch((error) => {
                alert('Opps, something went wrong!' + error);
            });
    }

    const handleExportPNG = () => {
        const node = document.querySelector('.code__preview__container');
        htmlToImage.toPng(node)
            .then((dataUrl) => {
                const link = document.createElement('a');
                const currentTime = new Date().getTime();
                link.target = '_blank';
                link.download = currentTime + 'code-preview.png';
                link.href = dataUrl;
                link.click();
            })
            .catch((error) => {
                alert('Opps, something went wrong!' + error);
            });
    }

    return (
        <div className="action__btns">
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleExport }>Download as SVG</button>
            <button onClick={ handleExportPNG }>Download as PNG</button>
        </div>
    )
}

export default ActionBtns