export default function Table(){
    return(
        <table border = '1' style={{borderCollapse:'collapse'}}>
        <thead>
            <tr>
            <th>
                Classification
            </th>
            <th>
                BMI
            </th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>Underweight</td>
            <td>Less than 18,5</td>
            </tr>
            <tr>
            <td>Healthy weight</td>
            <td>Between 18,5 and 24.9</td>
            </tr>
            <tr>
            <td>Overweight</td>
            <td>Between 25 and 29,9</td>
            </tr>
            <tr>
            <td>Obesity class I</td>
            <td>Between 30 and 34,9</td>
            </tr>
            <tr>
            <td>Obesity class II</td>
            <td>Between 35 and 39,9</td>
            </tr>
            <tr>
            <td>Obesity class III - Severe</td>
            <td>Higher than 40</td>
            </tr>
        </tbody>
        </table>
    )
}
      
