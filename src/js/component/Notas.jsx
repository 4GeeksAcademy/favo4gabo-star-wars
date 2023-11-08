import React, {useContext, useState, useEffect} from "react";
import {useParams} from "react-router-dom"
import { Context } from "../store/appContext";

// cuando consulte todos los personajes, planetas o vehiculos de la API, tengo que hacer un fetch anidado
// Porque en la primera consulta me los voy a traer a todos, y ese resultado tendre que recorrerlo e ir consultando url por url para pbtener cada personaje

