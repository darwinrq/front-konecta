import { API_URLS } from "../config";
import { baseGetAPIRequest, basePostAPIRequest, basePutAPIRequest } from "./util";

export async function getCursos() {
  try {
    const response = await baseGetAPIRequest(API_URLS.URL_CURSOS);
    return response;
  } catch (err) {
    console.log(err);
    return {};
  }
}

export async function postCurso(data) {
  try {
    const response = await basePostAPIRequest(API_URLS.URL_CURSO, data);
    return response;
  } catch (err) {
    console.log(err);
    return {};
  }
}

export async function postCalificacion(data) {
  try {
    const response = await basePutAPIRequest(API_URLS.URL_CALIFICACION, data);
    return response;
  } catch (err) {
    console.log(err);
    return {};
  }
}

export async function postLogin(data) {
  try {
    const response = await basePostAPIRequest(API_URLS.URL_TOKEN_AUTH, data);
    return response;
  } catch (err) {
    console.log(err);
    return {};
  }
}