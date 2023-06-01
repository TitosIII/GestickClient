import "../../../../public/CSS/CSS_Gestick.css";

export default function Footer(){
    return(
        <footer class="footerG">
            <div class="containerTop">
                <div class="row">
                    <div class="col1">
                        <div className="footer-col-G">
                            <h5 class="TituloFooter">Encuentranos</h5>
                        </div>
                            <p class="DescripcionFooter"> "Gestick Management System S.A." es una empresa dedicada al desarrollo del software con un equipo especializado en programacion</p>
                            <p><i class="fa fa-location-arrow"></i> Av. Luis Enrique Erro S/N, Unidad Profesional Adolfo López Mateos, Zacatenco, Alcaldía Gustavo A. Madero, C.P. 07738, Ciudad de México. </p>
                            <p><i class="fa fa-phone"></i> +52 55 38 18 53 99</p>
                            <p><i class="fa fa fa-envelope"></i> Gestick@gmail.com  </p>
        </div>

                <div class="col2">
                    <div className="footer-col-G">
                        <h5 class="TituloFooter">Paginas</h5>
                    </div>
                        <ul class="footerG_ul_amrc">
                            <li><a href="#">Inicio</a></li>
                            <li><a href="#">Sobre nosotros</a></li>
                            <li><a href="#">Registrate</a></li>
                            <li><a href="#">Iniciar sesion como dueño</a></li>
                            <li><a href="#">Iniciar sesion como empleado</a></li>
                        </ul>
                </div>
                <div class="col4">
                    <div className="footer-col-G">
                        <h5 class="TituloFooter">Siguenos en</h5>
                    </div>
                        <ul class="footerG_ul2_amrc">
                            <li><a href="#"><i class="fab fa-twitter fleft padding-right"></i> </a><p>Lorem Ipsum is simply dummy text of the printing...<a href="#">https://www.lipsum.com/</a></p></li>
                            <li><a href="#"><i class="fab fa-twitter fleft padding-right"></i> </a><p>Lorem Ipsum is simply dummy text of the printing...<a href="#">https://www.lipsum.com/</a></p></li>
                            <li><a href="#"><i class="fab fa-twitter fleft padding-right"></i> </a><p>Lorem Ipsum is simply dummy text of the printing...<a href="#">https://www.lipsum.com/</a></p></li>
                        </ul>
                    </div>
                </div>
            </div>

        <div class="containerG bottom">
            
        <p class="text-center">Copyright @2022 | Diseñado con el 💙 por <a href="/">Gestick</a></p>
        <ul class="social_footerG_ul">
                <li><a href="https://www.facebook.com/profile.php?id=100091645518649"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="https://instagram.com/__gestick?igshid=OTJhZDVkZWE="><i class="fab fa-instagram"></i></a></li>
            </ul>
        </div>
    </footer>
    )
}

