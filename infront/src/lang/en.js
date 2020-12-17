export default {
    home: {//首页文案
        h1: 'Merge StreamPay with DAICO and Kleros resolve disputes!',
        h2: 'Redesign DAICO with StreamPay and resolve disputes via Kleros',
        startBtn: 'Start',
        footer: {
            contactTitle: 'Contact Us',
        }
    },
    header: {//头部文案
        DAISO:'DAISO',
        home:'Home',
        dash:'DashBoard',
        docs:'Docs',
        metamask:'Please Install MetaMask wallet!'
    },
    dashboard: {//仪表盘文案
        dash:'DashBoard',
        stream:{
            projects:'Projects',
            streams:'Streams',
            vote:'Vote',
            arbitration:'Arbitration',
            myprojects:"Myprojects"
        },
        create:'Create Project',
        info:{
            projectId:'projectId',
            streamId: 'streamId',
            startTime:'StartTime',
            stopTime:'StopTime',
            amount:'WithdrawlAmount',
            checkStream:'Check',
            cancel:'Cancel',
            operation:'Operation',
            projectSellTokenAddress:'SellToken',
            projectSellDeposit:'SellDeposit',
            projectFundTokenAddress:'FundToken',
            projectFundDeposit:'FundDeposit',
            investSellDeposit:'InvestSellDeposit',
            investFundDeposit:'InvestFundDeposit',
            weight:'Weight',
            hash:'IPFS Hash',
            vote:'Vote',
            invest:"Invest",
            project:'Project',
            metaEvidence:'MetaEvidenceId',
            reclaimedAt:'ReclaimedAt',
            info:"Project Info",
            sellprice:"Sell Price"
        }
    },
    streamInfo: {//详情文案，streamInfo和cancelInfo可以共用
        streaminfo:'Information',
        details:{
            projectinfo:'Project Info Details',
            investInfo:'Invest Info Details',
            withdrawl:'Withdraw',
            cancel:'Cancel',
            invest:'Invest',
            arbitrate:'Arbitrate'
        },
        info:{
            copy:'Click Copy:{who}',
            sender:'Sender',
            projectId:'ProjectId',
            investSellDeposit:'SellDeposit',
            investFundDeposit:'FundDeposit',
            investWithdrawalAmount:'WithdrawalAmountOfFund',
            startTime:'Start Time',
            stopTime:'Stop Time',
            sellBalance:'SellBalance',
            fundBalance:'FundBalance',
            projectActualSellDeposit:'ActualSellDeposit',
            projectActualFundDeposit:'ActualFundDeposit',
            projectWithdrawalAmount:'WithdrawalAmount',
            projectSellDeposit:'SellDeposit',
            projectFundDeposit:'FundDeposit',
            havebeenStreamed:'HavebeenStreamed',
            noinvest:'No Invest'
        },
        function:{
            withdraw:'Please input the amount of withdrawl',
            operation:'Operation',
            confirm:'Confirm',
            cancel:'Cancel',
            format:'The amount input format is incorrect!',
            withdrawlSuccess:'Withdrawl Success!',
            withdrawlFailure:'Withdrawl Failure!',
            operationHint:'Operation Tips',
            nextOfInstallmentTime:'Past the next payment deadline!',
            pay:'Amount payable for the current period:',
            paySuccess:'Payment Success!',
            payFailure:'Payment Failure!',
            addInput:'Please input the INCREASE amount:',
            addSuccess:'Invest Success!',
            addFailure:'Invest Failure!',
            cancelStream:'Whether to cancel the Stream?',
            cancelSuccess:'Cancel Success!',
            cancelFailure:'Cancel Failure!',
        },
    },
    createstream:{
        create:{
            create:'Create Project',
            sellTokenAddress:'SellTokenAddress',
            fundTokenAddress:'FundTokenAddress',
            sellDeposit:'SellDeposit',
            fundDeposit:'FundDeposit',
            time:'Project Time',
            startTime:'Start Time',
            stopTime:'Stop Time',
            to:'To',
            choose:'Please Choose Token',
            creating:'Create Project ...',
            createSuccess:'Create Success',
            arbitrate:'Arbitrate',
            files:'Upload Files',
            pdf:'Upload a PDF for project info',
            metaEvidence:"Upload a PDF for evidence",
            click:'Click Upload'
        },
        validate:{
            sellTokenAddress:'Must be filled in sellTokenAddress!',
            sellDeposit:'Must be filled in sellDeposit!',
            fundTokenAddress:'Must be filled in fundTokenAddress!',
            fundDeposit:'Must be filled in fundDeposit!',
            hash:'Must be filled in hash!',
            startTime:'The startTime is required and must be smaller than now!',
            sellDepositRemainder:"The sellDeposit % (stopTime-startTime) must be 0!",
            fundDepositRemainder:"The fundDeposit % (stopTime-startTime) must be 0!"

        }
    },
    createArbitrate:{
        create:'Create Arbitration',
        info:'Description',
        arbitration:{
            createArbitration:"Create Arbitration",
            createDisputes:"Create Dispute",
            submitEvidence:"Submit Evidence",
            currentRulling:"Current Rulling",
            appeal:"Appeal",
            appealResult:"Appeal Result",
            refunds:"Refunds",
            payProjectFees:"Pay Project Fees",
            check:"Check Rulling",
            progress:"Arbitration Progress",
            info:"info",
            details:"Arbitration Details"
        }
    }
}