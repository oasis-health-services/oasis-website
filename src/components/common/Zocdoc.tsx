
export function Zocdoc({
    provider_id,
    practice_id,
    showScript = true }: {
        provider_id: string,
        practice_id: string,
        showScript?: boolean
    }) {
    return (
        <div>
            <a
                style={{ display: 'block' }}
                href={`https://www.zocdoc.com/practice/${practice_id}?lock=true&isNewPatient=false&referrerType=widget`}
                className='zd-plugin w-full'
                data-type='book-button'
                data-practice-id={practice_id}
                title='Oasis Health Services on Zocdoc'
            >
                <img
                    src={`https://offsiteschedule.zocdoc.com/images/remote/zd_bookonline_162x48.png?type=bobjs&monolith_provider_id=${provider_id}&practice_id=pt_${practice_id}`}
                    alt='Oasis Health Services on Zocdoc'
                    title='Oasis Health Services on Zocdoc'
                    style={{ border: 0 }}
                />
            </a>
            <script dangerouslySetInnerHTML={{
                __html: `
                    (function (d) {
                        var script = d.createElement('script');
                        script.type = 'text/javascript';
                        script.async = true;
                        script.src = 'https://offsiteschedule.zocdoc.com/plugin/embed';
                        var s = d.getElementsByTagName('script')[0];
                        s.parentNode.insertBefore(script, s);
                    })(document);
                `
            }} />
        </div>
    )
}