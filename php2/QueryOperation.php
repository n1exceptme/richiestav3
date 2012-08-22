<?php
/**
 * 
 * crud operation class. 
 * @author Juan Mendez <info@flexnroses.com>
 *
 */
class QueryOperation
{
	function __construct()
	{
		$conn = mysql_connect("localhost:3306", "root", "zinedine21") or die(mysql_error());
		mysql_select_db("veloci", $conn ) or die(mysql_error());
	}
	
	function __destruct()
	{
		mysql_close();
	}
		
	/**
	 * create a new record
	 * @param stdClass $params new record
	 */
	function createRichiesta( stdClass $params )
	{
		$query = "insert into richiesta2 ( `email`, `title`, `firstName`, `lastName`, `phone1`, `phone2`, `phone3`, `hours`, `minutes`, `startDate`, `endDate` ) values ( '$params->email', '$params->title', '$params->firstName', '$params->lastName', '$params->phone1', '$params->phone2', '$params->phone3', '$params->hours', '$params->minutes', '$params->startDate', '$params->endDate' )";
		mysql_query( $query );
		
		//$params->id = mysql_insert_id();
		
		return $params;		
	}

	
	/**
	 * get table records
	 * @param stdClass $params provides records offset and limit
	 */
	function getRichiesta( stdClass $params )
	{
		$query = "SELECT * FROM  `richiesta2`";
		$qResult = mysql_query($query); 
		$listResult = array();		
		
	  	while($row = mysql_fetch_array($qResult))
	  	{
	  		array_push($listResult, $row );
	  	}			
		
	  	return $listResult;
	}
	

	
	/**
	 * Aggiorna i campi della richiesta
	 * @param stdClass $params row to update record
	 */
	function updateRichiesta( stdClass $params )
	{	
		if( isset( $params->id ) )
		{
			$query = "UPDATE  richiesta SET richiedente = '$params->richiedente', progetto = '$params->progetto', cliente = '$params->cliente', odl = '$params->odl'  WHERE id = $params->id";
			mysql_query($query);
			
			$response = array( 'success'=>true, 'data'=>true );
			
			return $params;
		}
	}
		
	
	/**
	 * Cancella richiesta
	 * @param stdClass $params, only required attribute is the id
	 */
	function destroyRichiesta( stdClass $params )
	{
		if( isset( $params->id ) )
		{
			$query = "DELETE FROM richiesta2 WHERE id = $params->id LIMIT 1";
			mysql_query($query);
			
			return $params;
		}
	}
	
	
	
}