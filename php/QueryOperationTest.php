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
	function createRecord( stdClass $params )
	{
		$query = "insert into owners ( `name`, `address`, `state` ) values ( '$params->name', '$params->address', '$params->state' )";
		mysql_query( $query );
		
		$params->id = mysql_insert_id();
		
		return $params;		
	}


    function createRecord( stdClass $params )
    {
        $query = "insert into richiesta ( `richiedente`, `progetto`, `cliente`, 'id' ) values ( '$params->richiedente', '$params->progetto', '$params->cliente', '$params->id' )";
        mysql_query( $query );
        
        return $params;     
    }

	
	/**
	 * get table records
	 * @param stdClass $params provides records offset and limit
	 */
	function getResults( stdClass $params )
	{
		$query = "SELECT * FROM  `owners`";
		$qResult = mysql_query($query); 
		$listResult = array();		
		
	  	while($row = mysql_fetch_array($qResult))
	  	{
	  		array_push($listResult, $row );
	  	}			
		
	  	return $listResult;
	}
	

	/**
	 * Recupera l'ultima richiesta
	 * @param stdClass $params provides records offset and limit
	 */
	function getRichiesta( stdClass $params )
	{
		$query = "SELECT * FROM  `richiesta`";
		$qResult = mysql_query($query); 
		$listResult = array();		
		
	  	while($row = mysql_fetch_array($qResult))
	  	{
	  		array_push($listResult, $row );
	  	}			
		
	  	return $listResult;
	}	
	
	
	/**
	 * update record
	 * @param stdClass $params row to update record
	 */
	function updateRecords( stdClass $params )
	{	
		if( isset( $params->id ) )
		{
			$query = "UPDATE  owners SET name = '$params->name', address = '$params->address', state = '$params->state'  WHERE id = $params->id";
			mysql_query($query);
			
			$response = array( 'success'=>true, 'data'=>true );
			
			return $params;
		}
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
	 * delete record
	 * @param stdClass $params, only required attribute is the id
	 */
	function destroyRecord( stdClass $params )
	{
		if( isset( $params->id ) )
		{
			$query = "DELETE FROM owners WHERE id = $params->id LIMIT 1";
			mysql_query($query);
			
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
			$query = "DELETE FROM richiesta WHERE id = $params->id LIMIT 1";
			mysql_query($query);
			
			return $params;
		}
	}
	
	
	
}