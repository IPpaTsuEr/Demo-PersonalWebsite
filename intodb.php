<?php
            header("Content-Type: application/json");
            header("Cache-Control: no-cache");
            header("Pragma: no-cache");

            	if(isset($_POST["title"])&&isset($_POST["info"])&&isset($_POST["mail"])&&isset($_POST["type"]))
                 {

                 						$i=0;
                                         $title=$_POST["title"];
                                         $info=$_POST["info"];
                                         $mail=$_POST["mail"];
                                         $type=$_POST["type"];

                        $da=array();
						$sql="insert into message(`title`,`info`,`mail`) values('". $title."','".$info."','".$mail."')";
            			$db_link=mysql_connect('localhost','a0913203609','6228427');
            			if(!$db_link)
            				{
            					$da[0]="error";
            				}
            			else{
								mysql_select_db('a0913203609',$db_link);
								
								if($type=="insert")
								{
									$result=mysql_query($sql);
								}
								else if($type=="select")
								{
									$result=mysql_query("select * from message order by time desc");
								}

            					if(!$result)
            					{
									$da[0]="error";
								    echo json_encode($da,JSON_UNESCAPED_UNICODE);
            					}
            					else
            					{
            					if($type=="insert")
								{
									$da[0]="success";
									echo json_encode($da,JSON_UNESCAPED_UNICODE);
								}
            					else if($type=="select")
								{
								if ($result){
								while($row=mysql_fetch_array($result,MYSQL_ASSOC))
                                		{
                                		$da[$i]=$row;
                                		$i++;
                                		}
									echo json_encode($da,JSON_UNESCAPED_UNICODE);
									}
									else{
									$da[0]="emputy";
									echo json_encode($da,JSON_UNESCAPED_UNICODE);
									}
								}


            					}
            				}

            	}
            	else
            		{
            				$da[0]="error";
						echo json_encode($da,JSON_UNESCAPED_UNICODE);
            		}
            




?>