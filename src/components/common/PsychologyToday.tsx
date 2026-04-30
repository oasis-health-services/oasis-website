
export default function PsychologyToday({
    profile_id
}: {
    profile_id: string
}) {
    return (
        <>
        <a href={`https://www.psychologytoday.com/profile/${profile_id}`} target="_blank" className="sx-verified-seal"></a>
        <script 
            type="text/javascript" 
            src="https://member.psychologytoday.com/verified-seal.js" 
            data-badge="13" 
            data-id={profile_id} 
            data-code="aHR0cHM6Ly93d3cucHN5Y2hvbG9neXRvZGF5LmNvbS9hcGkvdmVyaWZpZWQtc2VhbC9zZWFscy8xMy9wcm9maWxlLzc2MDc5Nz9jYWxsYmFjaz1zeGNhbGxiYWNr">
        </script>
        </>
    )
}

