import "./CasesIndexPage.css"
import { useState, useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import { Link } from "react-router-dom";
import { getCases } from "../../utilities/cases-service";
import CaseItem from "./CaseItem";

export default function IndexPage () {
    const [cases, setCases] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    async function handleRequest() {
        const response = await getCases();
        if(typeof response === "object") {
            setCases(response)
            setIsLoading(false)
        } else {
            console.log("error: ", response)
        }
    }
    useEffect(() => {
        handleRequest();
      }, [])

    const casesList = cases?.map((simCase, idx) => < CaseItem simCase={simCase} idx={idx} handleRequest={handleRequest} />)

    return (
        <section className="posts-index-ctr">
            <Loader />
        </section>
    );

}